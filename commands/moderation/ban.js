const { MessageEmbed, Permissions } = require('discord.js');

module.exports.execute = async (client, interaction, data) => {
    const member = interaction.options.getMember('user');
    let reason = interaction.options.getString('reason');

    if (interaction.member == member) return interaction.reply({ content: 'You cannot ban yourself.', ephemeral: true });
    if (!reason) reason = "No reason provided.";

    const embed = new MessageEmbed()
        .setColor("BLUE")
        .setAuthor({ name: `[BAN] ${member.user.username}`, iconURL: member.user.avatarURL() })
        .setDescription(`• Moderator: <@${interaction.member.user.id}>\n• Reason: ${reason}`)
        .setImage('https://c.tenor.com/jJuyU09YX3AAAAAd/thor-banhammer.gif')

    try {
        await member.ban({ days: 7, reason: reason });
    } catch (err) {
        return console.log(err);
    }

    await interaction.reply({ embeds: [embed] });
}

module.exports.help = {
    name: "ban",
    description: "Ban a user from the server.",
    options: [
        {
            name: 'user',
            type: 'USER',
            description: 'The user you want to ban.',
            required: true
        },
        {
            name: 'reason',
            type: 'STRING',
            description: 'The reason why you want to ban the user.',
            required: false
        }
    ],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    ownerOnly: false
}