const userSchema = require("../database/schemas/users");

function getMinutesBetween(joinedOn, leftOn) {
    var timeBetween = leftOn - joinedOn;
    return Math.round(timeBetween / 60);
}

module.exports = async (client, oldState, newState) => {
    var timestamp = Math.round(Date.now() / 1000);

    if (oldState.channel === null) {
        await userSchema.updateOne({ userId: newState.member.id }, {
            $set: {
                'vcSessionStart': timestamp
            }
        });
    } else if (newState.channel === null) {
        let userData = await client.database.fetchUser(oldState.member.id);

        if (userData.vcSessionStart != 0) {
            let minutesInVc = getMinutesBetween(userData.vcSessionStart, timestamp);

            await userSchema.updateOne({ userId: oldState.member.id }, {
                $inc: {
                    'minutesInVc': minutesInVc
                },
                $set: {
                    'vcSessionStart': 0
                }
            });
        }
    }
}