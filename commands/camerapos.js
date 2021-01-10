const {obs} = require("../bot.js")

exports.run = (client, message, args, context, channel, self) => {
    if (context.badges !== null && context.badges["broadcaster"] === "1" || context.badges !== null && context.badges["moderator"] === "1") {
        obs.sendCallback('GetSceneItemProperties', {"item": process.env.OBS_ITEMCAMERA}, (err, data) => {
            if (err && err.status === "error" && err.error === "specified scene item doesn't exist") return client.say(process.env.KANALNAME, "Diese Quelle existiert nicht.");
            if (data && data.status === "ok") return client.say(process.env.KANALNAME, `Kameraposition: x: ${data.position.x}; y: ${data.position.y}`);
        });
        return true;
    }

}