const configValues = require("../index.js");
const chalk = require("chalk");

module.exports = {
    name: 'ready',
    once: true,
    run: async(client, message, args) => {

        if(!configValues.disableCommands) console.log(chalk.green("[INFO] Comandi caricato con successo!"));
        console.log(chalk.green("[INFO] Bot avviato!."));
    }
}
