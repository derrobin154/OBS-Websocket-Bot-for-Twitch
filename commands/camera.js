const {obs} = require("../bot.js")
const camerapositions = require("../json/camerapos.json");

exports.run = (client, message, args, context, channel, self) => {
    if (args.length === 0) return;
    if (context.badges !== null && context.badges["broadcaster"] === "1" || context.badges !== null && context.badges["moderator"] === "1") {
        if (camerapositions[args] === undefined) return client.say(process.env.KANALNAME, "Diese Position wurde nicht festgelegt.");
        obs.sendCallback('SetSceneItemProperties', {
            "item": process.env.OBS_ITEMCAMERA,
            "position": {"x": camerapositions[args].x, "y": camerapositions[args].y}
        }, (err, data) => {
            if (err && err.status === "error" && err.error === "specified scene item doesn't exist") return client.say(process.env.KANALNAME, "Diese Quelle existiert nicht.");
            if (data && data.status === "ok") return client.say(process.env.KANALNAME, `Neue Kameraposition: ${args}`)
        });
        return true;
    }

}