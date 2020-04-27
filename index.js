const { Client } = require('discord.js');
const bot = new Client();
// Here you can choose your prefix.
const PREFIX = "poll!";
// Here you have to put your bot token. Do not share it with anyone.
const token = '[INSERT YOUR BOT TOKEN HERE]';

// This code will run when the bot is started.
bot.on('ready', () => {
    console.log("The Bot is online and ready to go, give him some commands on Discord!");
    bot.user.setActivity("poll!help", {type: "LISTENING"});
});

bot.login(token);

bot.on("message", message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0]) {
	// When the user writes "poll!help", this will appear.
        case "help":
            message.channel.send("[YOUR HELP MESSAGE HERE]");
            
        break;

        case "create":
            if (!args[1]) {
		// Things to do if the user does not write something to ask, but only writes "poll!create".
                message.channel.send("[YOUR ERRORE MESSAGE HERE, TO DISPLAY WHEN THE USER DOES NOT INCLUDE SOMETHING TO ASK.");
                break;
            }
	    // This will run if the user succesfully creates a poll.
            let msgArgs = args.slice(1).join(" ");
            message.channel.send(msgArgs).then(messageReaction => {
		// The reactions that helps the user answer the question.
                messageReaction.react("👍");
                messageReaction.react("👎");
            });
        break;
    }
});
