/**
 * TMI.js Commandresolver by BYTEthinks
 */

let commandResolver = (client, channel, context, message, self) => {
    const command = recognizeCommand(message);

    if (!command) return;

    try {
        let commandFile = require(`../commands/${command.command}.js`);
        commandFile.run(client, message, command.args, context, channel, self);
        console.log(`${context.username} run command: ${message}`);
    } catch (err) {
        console.error(`${context.username} run unknown command: ${message}`);
    }
}

let recognizeCommand = (message) => {
    const regex = /\!(.*?)$/gm;
    const fullCommand = regex.exec(message);

    if (fullCommand) {
        const splittedCommand = fullCommand[1].split(' ')
        const command = splittedCommand[0];

        splittedCommand.shift() // remove command from array

        return {
            command: command,
            args: splittedCommand
        }
    }

    return false
}

module.exports = {
    resolve: (client, channel, context, message) => {
        commandResolver(client, channel, context, message)
    }
}