module.exports = async (client, member) => {
    let role = member.guild.roles.cache.find(role => role.id === "828233945996066857");
    member.roles.add(role);

    await client.channels.cache.get("913835765719527474").send({ content: `Welcome, ${member.user.tag}. Please read our <#913834838824468540> and <#913848419964051507>. Have fun in MetaCraft!` });

    let guild = client.guilds.cache.get(client.config.guildId);
    client.channels.cache.get(client.config.statChannelId).setName(`✨ Members: ${guild.memberCount}`);
}