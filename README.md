# MetaCraft
The project was made for the [Discord](https://www.discord.com/) server for MetaCraft. MetaCraft is a metaverse within the game [Minecraft](https://www.minecraft.net/).

More info about MetaCraft on our [website](https://www.metacraft.earth/).

## Features
* Moderation commands (kick, ban, unban, clear)
* Ticket module
* Select Roles module
* Verification system
* Uses slash commands and buttons
* Leveling System
* and so much more...

## Suggestions, bugs, feature requests
Want to contribute? Great, we love that! Please take your time on [opening a new issue](https://github.com/SiebeBaree/MetaCraft/issues).

## How to use the bot?
This discord bot only makes use of slash commands and events. That means all commands are registred in the discord command handler. To view all commands type `/help` or type `/` and click on the bot logo.

## Self-hosting
We do not recommend self-hosting the bot, but it's always an option.

#### Requirements
* Node - confirmed working on v17.0.1
* npm - comes with Node, the version shouldn't really matter
* A Discord bot token, and having the bot in your server
* An mongodb.com-database set up, as well as a user to it (with write access)
* A clone of the source code, this can be found [here](https://github.com/SiebeBaree/MetaCraft) and needs to be extracted to a folder.

#### Setup (Do this only once)
* Do `npm i` inside the folder, and wait for it to finish
* Change the values in `config.json` to your values of your server.
* Create a file `.env` in the root of the folder and paste the following
```
TOKEN=YOUR-DISCORD-BOT-TOKEN-HERE
DATABASE_URI=mongodb://your-db-connection.com:27017/
```

> ### ⚠ Warnings
> * Do not touch `data/tickets.json` unless you want to reset the ticket number.
> * There is literally no warranty if you self-host MetaCraft, and we will not help you set it up either. If you wish to set the bot up yourself, we expect you have well enough knowledge in Node.js and Discord API.

## License
We use the GNU GPLv3-license.
> You may copy, distribute and modify the software as long as you track changes/dates in source files. Any modifications to or software including (via compiler) GPL-licensed code must also be made available under the GPL along with build & install instructions.

Fetched from [TLDRLegal](https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)), please also read the [license](https://github.com/SiebeBaree/MetaCraft/blob/master/LICENSE) if you plan on using the source code. This is only a short summary. Please also take note of that we are not forced to help you, and we won't help you host it yourself as we do not recommend you doing so.

## Also check out
* [Website](https://www.metacraft.earth/)
* [Discord](https://www.metacraft.earth/discord#github)
* **Minecraft server:** play.metacraft.earth