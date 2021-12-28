module.exports = async (client) => {
    var data = [];

    client.commands.forEach(command => {
        let commandObject = {
            name: command.help.name,
            description: command.help.description || "No Description Provided.",
            options: command.help.options
        };
        data.push(commandObject);
    });

    // Debug Code to quickly set slash commands in test server.
    await client.guilds.cache.get(client.config.guildId)?.commands.set(data);

    client.user.setPresence({ activities: [{ name: client.config.activity.name, type: client.config.activity.type }], status: client.config.activity.status });

    let guild = client.guilds.cache.get(client.config.guildId);
    client.channels.cache.get(client.config.statChannelId).setName(`✨ Members: ${guild.memberCount}`);

    client.logger.ready(`Client is ready.`)
}