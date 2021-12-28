const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.execute = async (client, interaction, data) => {
    const embed = new MessageEmbed()
        .setColor("BLUE")
        .setAuthor({ name: 'Verify', iconURL: 'https://i.imgur.com/ddqwT2W.png' })
        .setDescription(`If you click on the button below you argee to our [Terms Of Service](https://www.metacraft.earth/tos), our [Privacy Policy](https://www.metacraft.earth/privacy-policy) and our <#913834838824468540>.\n\n*Click on the button below to verify yourself.*`)
        .setImage('https://i.imgur.com/dwHWhrn.png')

    const row = new MessageActionRow().addComponents(
        new MessageButton()
            .setCustomId("verify")
            .setLabel("Verify")
            .setEmoji('✔️')
            .setStyle("SUCCESS")
    )

    const channel = client.channels.cache.get(client.config.verificationChannelId);
    await channel.send({ embeds: [embed], components: [row] });
    interaction.reply({ content: `Successfully setup the verification module.`, ephemeral: true });
}

module.exports.help = {
    name: "verification-setup",
    description: "Setup the verification module.",
    options: [],
    enabled: true,
    memberPermissions: [],
    ownerOnly: true
}