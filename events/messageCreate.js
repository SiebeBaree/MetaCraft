const userSchema = require("../database/schemas/users");

module.exports = async (client, message) => {
    try {
        if (message.author.bot) return; // Return if author is bot
        if (!message.guild) return; // Return if dms or group chat

        // add XP for user
        let userData = await client.database.fetchUser(message.author.id);

        let newExperience = client.tools.getRandomNumber(10, 25);
        let levelUp = 0;

        if (client.tools.isUserLevelUp(userData.experience + newExperience, userData.level)) levelUp = 1;

        await userSchema.updateOne({ userId: message.author.id }, {
            $inc: {
                'level': levelUp,
                'experience': newExperience,
                'messagesSent': 1
            }
        });

        //Check if message mentions bot only
        if (message.content === `<@!${message.client.user.id}>` || message.content === `<@${message.client.user.id}>`) {
            return message.reply({ content: `If you need help with the bot, use \`/help\``, allowedMentions: { repliedUser: true } });
        }
    } catch (err) {
        console.error(err);
    }
};