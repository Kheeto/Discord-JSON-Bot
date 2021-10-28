const prefix = "!";

var jsonData; // used to access json data from other files

// imports some libraries
const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");
const { config } = require("dotenv");

// client and commands things
const client = new Client({
    disableEveryone: true
});
client.commands = new Collection();
client.aliases = new Collection();

// get the json data from the file
jsonData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'example.json')));

module.exports = {
    prefix: prefix,
    client: client,
    jsonData: jsonData,
}

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler=>{
    require(`./listeners/${handler}`)(client);
});

// event handling
const eventFiles = fs.readdirSync('./listeners').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./listeners/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.run(...args));
	} else {
		client.on(event.name, (...args) => event.run(...args));
	}
}

client.on("message", async message => {
        if(message.author.bot) return; // ignores incoming messages from bots
        if(message.channel.type === "dm") return message.reply("Non puoi usare il bot in privato. Solo in un server");
        if(!message.guild) return;
        if(!message.content.startsWith(prefix)) return;
        if(!message.member) message.member = await message.guild.fetchMember(message);
        const args = message.content.slice(prefix.length).trim().split(/ +/g); // check the command parameters/arguments
        const cmd = args.shift().toLowerCase();
        if(cmd.length == 0) return; // command length is 0
        var command = client.commands.get(cmd);
        if(!command) command = client.commands.get(client.aliases.get(cmd)); // aliases
        if(command) {
            command.run(client,message,args); // finally executes the command
        }
    }
);

// actually starts the bot by using the token in a separate ".env" file
client.login(process.env.TOKEN)
