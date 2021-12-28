const { MessageEmbed } = require('discord.js');

module.exports.execute = async (client, interaction, data) => {
    const member = interaction.options.getString('user');

    const embed = new MessageEmbed()
        .setColor("BLUE")
        .setAuthor({ name: `[UNBAN] ${member}`, iconURL: `https://cdn.discordapp.com/embed/avatars/0.png` })
        .setDescription(`• Moderator: <@${interaction.member.user.id}>`)

    try {
        await interaction.guild.members.unban(member);
    } catch {
        return interaction.reply({ content: `That user isn't banned.`, ephemeral: true });
    }

    await interaction.reply({ embeds: [embed] });
}

module.exports.help = {
    name: "unban",
    description: "Unban a user.",
    options: [
        {
            name: 'user',
            type: 'STRING',
            description: 'The user you want to unban.',
            required: true
        }
    ],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    ownerOnly: false
}