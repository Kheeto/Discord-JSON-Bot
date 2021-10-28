const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const index = require("../index.js");

module.exports = {
    name: "example",

    run: async (client, message, args) => {

        if(index.jsonData[message.guild.id] != null) { // If it finds the text for the current guild in the json
            message.channel.send(index.jsonData[message.guild.id]); // then it sends it to the channel where the command is being used
        }

    }
}
