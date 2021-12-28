module.exports.execute = async (client, interaction, data) => {
    const amount = interaction.options.getInteger('messages');

    if (amount > 100) return interaction.reply({ content: 'You can\'t delete more than 99 messages at one time.', ephemeral: true });

    try {
        await interaction.channel.bulkDelete(amount);
    } catch (err) {
        client.logger.warn("There were some messages older than 14 days in the latest clear command.");
    } finally {
        await interaction.reply({ content: `${amount} messages deleted.`, ephemeral: true });
    }
}

module.exports.help = {
    name: "clear",
    description: "Delete a number of messages from a channel.",
    options: [
        {
            name: 'messages',
            type: 'INTEGER',
            description: 'How many messages you want to clear.',
            required: true
        }
    ],
    enabled: true,
    memberPermissions: ["MANAGE_MESSAGES"],
    ownerOnly: false
}