const configValues = require("../index.js");
const chalk = require("chalk");

module.exports = {
    name: 'ready',
    once: true,
    run: async(client, message, args) => {

        if(!configValues.disableCommands) console.log(chalk.green("[INFO] Successfully loaded commmands!"));
        console.log(chalk.green("[INFO] Bot has been started!"));
    }
}
