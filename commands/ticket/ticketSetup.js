const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const fs = require('fs');
const ticketSettings = require('../../data/tickets.json');

module.exports.execute = async (client, interaction, data) => {
    const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(`:ticket: Create a Ticket`)
        .setDescription(`Need help with something or is there anything you want to tell the staff? **Create your ticket now!**\n\n__Click on any of the buttons to create a ticket:__\n:star: General Ticket\n:warning: Report Someone\n:cockroach: Report Bugs\n:page_facing_up: Staff Application\n:beginner: Partnership Ticket\n\n**Languages:** English :flag_gb:/:flag_us:, Dutch :flag_nl:/:flag_be:\n\n*If you cannot open a ticket, you probably have a ticket open already.*`)
        .setFooter(client.config.footer)

    const row = new MessageActionRow().addComponents(
        new MessageButton()
            .setCustomId("ticketCreateGeneral_Ticket")
            .setLabel("General")
            .setStyle("PRIMARY")
            .setEmoji("⭐"),
        new MessageButton()
            .setCustomId("ticketCreateReport_Someone")
            .setLabel("Report")
            .setStyle("DANGER")
            .setEmoji("⚠️"),
        new MessageButton()
            .setCustomId("ticketCreateReport_Bugs")
            .setLabel("Bugs")
            .setStyle("DANGER")
            .setEmoji("🪳"),
        new MessageButton()
            .setCustomId("ticketCreateStaff_Application")
            .setLabel("Staff Application")
            .setStyle("SECONDARY")
            .setEmoji("📄"),
        new MessageButton()
            .setCustomId("ticketCreatePartnership")
            .setLabel("Partnership")
            .setStyle("SUCCESS")
            .setEmoji("🔰")
    )

    const channel = client.channels.cache.get(client.config.ticket.channelId);
    const msg = await channel.send({ embeds: [embed], components: [row] });

    ticketSettings.messageId = msg.id;

    fs.writeFile(`${process.cwd()}/data/tickets.json`, JSON.stringify(ticketSettings, null, 4), function writeJSON(err) {
        if (err) return console.log(err);
    });

    interaction.reply({ content: `Successfully setup the ticket module.`, ephemeral: true });
}

module.exports.help = {
    name: "ticket-setup",
    description: "Setup the ticket module.",
    options: [],
    enabled: true,
    memberPermissions: [],
    ownerOnly: true
}