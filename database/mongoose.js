const userSchema = require("./schemas/users");
const ticketSchema = require("./schemas/tickets");

// Create/find users collection
module.exports.fetchUser = async function (user) {
    let userDoc = await userSchema.findOne({ userId: user });

    if (userDoc) {
        return userDoc;
    } else {
        userDoc = new userSchema({
            userId: user
        })
        await userDoc.save().catch(err => console.log(err));
        return userDoc;
    }
};

// Create/find tickets collection
module.exports.fetchTicket = async function (user) {
    let ticketDoc = await ticketSchema.findOne({ ownerId: user });

    if (ticketDoc) {
        return ticketDoc;
    } else {
        return undefined;
    }
};