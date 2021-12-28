const { MessageActionRow, MessageButton } = require('discord.js');

module.exports.execute = async (client, interaction, data) => {
    const content = `\`\`\`
 
\`\`\`
:sparkles: **__Special Roles__**
> <@&913819900043227147> ➣ Take all verify steps in <#913855875427500073>
> ✓ Be able to type in channels and join voice calls
> ✓ Access to all public channels
> 
> <@&913820152896835635> ➣ Donate at least $3
> ✓ Can change nickname\n
:art: **__Creator Roles:__**
> <@&913820823717044234> ➣ Have a Youtube or Twitch channel with at least minimum requirements. (Requirements in <#913824922692894801>)
> ✓ Can post videos/streams in <#> (only when you play on the MetaCraft server)
> ✓ Can access <#> and <#>
> ✓ Can change nickname
> 
> <@&913820354131140679> ➣ Creators who create art or build cool things on plots in MetaCraft.
> ✓ Can Access <#913849825752137759>
> 
> <@&913820124216164432> ➣ Have at least 1 plot in your account\n
**__Nitro Booster__**
> <@&914886180812759071> ➣ Given to those that boost the server
> ✓ Can access <#>
> ✓ Can change nickname\n
**__Staff Roles__**
> <@&913820708843450398> ➣ Run our social media platforms
> <@&913821461326725260> ➣ Pass the staff application
> <@&913820067437899836> ➣ Be promoted from Staff (if applicable)
> <@&913820188439351328> ➣ Be handpicked from staff or moderator\n
**__Self Roles__**
> <@&913820667114311750> ➣ Be notified of every (little) announcement/update
> <@&913820689159577601> ➣ Be notified whenever a new giveaway takes place
> <@&913820428047355905> ➣ Be notified of crypto news/updates\n
\`\`\`
 
\`\`\``

    const row = new MessageActionRow().addComponents(
        new MessageButton()
            .setCustomId("roles913820667114311750")
            .setLabel("Updates")
            .setEmoji('🔔')
            .setStyle("PRIMARY"),
        new MessageButton()
            .setCustomId("roles913820689159577601")
            .setLabel("Giveaways")
            .setEmoji('🎉')
            .setStyle("PRIMARY"),
        new MessageButton()
            .setCustomId("roles913820428047355905")
            .setLabel("Crypto")
            .setEmoji('🪙')
            .setStyle("PRIMARY")
    )

    const channel = client.channels.cache.get(client.config.rolesChannelId);
    await channel.send({ content: content, components: [row] });
    interaction.reply({ content: `Successfully setup the roles module.`, ephemeral: true });
}

module.exports.help = {
    name: "role-setup",
    description: "Setup all roles.",
    options: [],
    enabled: true,
    memberPermissions: [],
    ownerOnly: true
}