const { MessageEmbed } = require('discord.js');

module.exports.execute = async (client, interaction, data) => {
    const member = interaction.options.getMember('user');
    let reason = interaction.options.getString('reason');

    if (interaction.member == member) return interaction.reply({ content: 'You cannot kick yourself.', ephemeral: true });
    if (!reason) reason = "No reason provided..";

    const embed = new MessageEmbed()
        .setColor("BLUE")
        .setAuthor({ name: `[KICK] ${member.user.username}`, iconURL: member.user.avatarURL() })
        .setDescription(`• Moderator: <@${interaction.member.user.id}>\n• Reason: ${reason}`)

    try {
        await member.kick({ reason: reason });
    } catch (err) {
        return console.log(err);
    }

    await interaction.reply({ embeds: [embed] });
}

module.exports.help = {
    name: "kick",
    description: "Kick a user from the server.",
    options: [
        {
            name: 'user',
            type: 'USER',
            description: 'The user you want to kick.',
            required: true
        },
        {
            name: 'reason',
            type: 'STRING',
            description: 'The reason why you want to kick the user.',
            required: false
        }
    ],
    enabled: true,
    memberPermissions: ["KICK_MEMBERS"],
    ownerOnly: false
}