const { readdirSync } = require("fs");
const chalk = require('chalk');
console.log(chalk.yellow("Initializin commands..."));

var commands;

module.exports = (client) => {
    readdirSync("./commands").forEach(dir => {
        commands = readdirSync(`./commands/`).filter(file => file.endsWith(".js"));

        for(let file of commands) {
            pull = require(`../commands/${file}`);
            if(pull.name) {
                client.commands.set(pull.name, pull);
                console.log("Loaded command: "+ chalk.cyan(pull.name));
            } else {
                console.log(chalk.red("[ERRORE] Cannot load command "+pull+", because it's not a valid command."))
                continue;
            }
            if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }

        
    }), commands;
}
