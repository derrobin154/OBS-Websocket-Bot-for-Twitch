/*
    OBS Websocket Bot for Twitch
    Author: derrobin154
    Used Packages: tmi.js@npm, obs-websocket-js@npm, dotenv@npm
 */
const twitch = require('tmi.js');
const dotenv = require('dotenv').config({path: './.env'});
const client = new twitch.client({
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: process.env.USERNAME,
        password: process.env.OAUTH
    },
    channels: [process.env.KANALNAME]
})
const commandResolver = require('./functions/commandResolver.js');
const OBSWebSocketJS = require('obs-websocket-js');
const obs = new OBSWebSocketJS();

console.log("OBS Websocket Bot for Twitch by derrobin154 | Version 1.0");
obs.connect({address: `${process.env.OBS_IP}:${process.env.OBS_PORT}`, password: process.env.OBS_PASSWORD}).then(() => {
    console.log("Verbindung mit OBS hergestellt")
}).catch(err => {
    console.error(`Fehler bei der Verbindung mit OBS Websockets. Bot stoppt.\nFehler: ${err.error}`);
    process.exit();
})
client.connect();


client.on('message', (channel, context, message, self) => {
    const prefix = "!";
    if (message.substr(0, prefix.length) === prefix) {
        commandResolver.resolve(client, channel, context, message, self)
    }
})

client.on('connected', (addr, port) => {
    console.log(`* Connected to ${addr}:${port}`);
    console.log(`Verbindung mit dem Twitch Server hergestellt`);
    setTimeout(function () {
        client.say(process.env.KANALNAME, `/me OBS Websocket Bot aktiv`);
    }, 1000)
});
obs.on('error', err => {
    console.error('Socket error:', err);
});

module.exports = {obs}