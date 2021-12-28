require('dotenv').config();
const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const { Client, Collection } = require('discord.js');
const mongoose = require('mongoose');

const client = new Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_BANS", "GUILD_VOICE_STATES"] });

client.commands = new Collection();
client.event = new Collection();
client.config = require('./config.json');
client.logger = require('./tools/logger');
client.tools = require('./tools/tools');
client.resolver = require('./tools/resolvers');
client.database = require('./database/mongoose');

async function init() {
    // Event handler
    const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
    for (const file of eventFiles) {
        const event = require(`${process.cwd()}/events/${file}`);
        const eventName = file.split(".")[0];
        client.logger.load(`Loading event ${file}.`);
        client.on(eventName, event.bind(null, client));
    }

    // Command Handler
    let commandFolder = await readdir("./commands/");
    commandFolder.forEach(dir => {
        const commandFiles = fs.readdirSync('./commands/' + dir + "/").filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`${process.cwd()}/commands/${dir}/${file}`);

            try {
                client.commands.set(command.help.name, command);
            } catch (err) {
                client.logger.error(`An unexpected error occured with COMMAND ${file}.`);
            }
        }
    });

    // Connect to the database
    mongoose.connect(process.env.DATABASE_URI, { dbName: "metacraft" }).then(() => {
        client.logger.ready(`Connected to MongoDB.`);
    }).catch((err) => {
        client.logger.error('Unable to connect to MongoDB Database.\nError: ' + err);
    })

    await client.login(process.env.TOKEN);
}

init();

process.on('unhandledRejection', err => {
    client.logger.error(`Unknown error occured:\n`);
    console.log(err)
})

module.exports.client = client;