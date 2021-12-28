const { MessageEmbed } = require("discord.js");
var { dependencies } = require('../../package.json');

module.exports.execute = async (client, interaction, data) => {
    const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024;

    const newEmbed = new MessageEmbed()
        .setAuthor({ name: `Bot Statistics`, iconURL: client.user.avatarURL() })
        .setColor("BLUE")
        .setFooter(client.config.footer)
        .setTimestamp()
        .setThumbnail(`${client.user.avatarURL()}`)
        .addFields(
            { name: 'Library', value: `discord.js${dependencies["discord.js"]}`, inline: true },
            { name: 'Uptime', value: `${client.tools.msToTime(client.uptime)}`, inline: true },
            { name: 'Memory Usage', value: `${Math.round(usedMemory * 100) / 100} MB`, inline: true }
        )
    await interaction.reply({ embeds: [newEmbed] });
}

module.exports.help = {
    name: "statistics",
    description: "Get some statistics about the bot.",
    options: [],
    enabled: true,
    memberPermissions: [],
    ownerOnly: false
}