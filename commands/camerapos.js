const {obs} = require("../bot.js")

exports.run = (client, message, args, context, channel, self) => {
    if (context.mod || context.badges["broadcaster"] === "1") {
        obs.sendCallback('GetSceneItemProperties', {"item": process.env.OBS_ITEMCAMERA}, (err, data) => {
            if (err && err.status === "error" && err.error === "specified scene item doesn't exist") {
                client.say(process.env.KANALNAME, "Diese Quelle existiert nicht.");
                return false;
            }
            if (data && data.status === "ok") {
                return client.say(process.env.KANALNAME, `Kameraposition: x: ${data.position.x}; y: ${data.position.y}`)
            }
        });
        return true;
    }

}