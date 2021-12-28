module.exports = async (client, member) => {
    let guild = client.guilds.cache.get(client.config.guildId);
    client.channels.cache.get(client.config.statChannelId).setName(`✨ Members: ${guild.memberCount}`);
}