// priority: 800
// 旧版 mob_effect/oveload.js 迁移
function overloadEntityHurtByPlayer(event, data) {
    let player = event.source.player;
    if (player.hasEffect('kubejs:overload')) {
        let temperature = ColdSweat.getTemperature(player, 'body')
        let amplifier = player.getEffect('kubejs:overload').getAmplifier() + 1
        if (temperature > 0) event.amount = event.amount * (temperature / 50 + 1 + amplifier / 8) / 2
    }
}

function overloadEntityHurtByOthers(event, data) {
    let player = event.entity
    if (player.hasEffect('kubejs:overload')) {
        let temperature = ColdSweat.getTemperature(player, 'body')
        if (temperature > 0) event.amount = event.amount * temperature / 50
    }
}

function iceEntityHurtByOthers(event, data) {
    let player = event.entity
    if (player.hasEffect('kubejs:ice')) {
        let temperature = ColdSweat.getTemperature(player, 'body')
        if (temperature < 0) event.amount = event.amount * 50 / (-temperature)
    }
}
