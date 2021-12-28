module.exports.execute = async (client, interaction, data) => {
    let channel = interaction.options.getChannel("channel");
    await channel.send({ content: `${interaction.options.getString("message")}` });
    await interaction.reply({ content: `Message succesfully send.`, ephemeral: true })
}

module.exports.help = {
    name: "send-message",
    description: "Send a message through the bot.",
    options: [
        {
            name: 'channel',
            type: 'CHANNEL',
            description: 'The channel you want your message in.',
            required: true
        },
        {
            name: 'message',
            type: 'STRING',
            description: 'The message itself.',
            required: true
        }
    ],
    enabled: true,
    memberPermissions: ["ADMINISTRATOR"],
    ownerOnly: false
}