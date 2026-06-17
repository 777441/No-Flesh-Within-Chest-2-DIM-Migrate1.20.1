// priority: 800
// 旧版 mob_effect/burning_heart.js 迁移
function burningHeartEntityHurtByPlayer(event, data) {
    let player = event.source.player;
    if (player.hasEffect('kubejs:burning_heart')) {
        let amplifier = player.getEffect('kubejs:burning_heart').getAmplifier();
        event.amount = event.amount + amplifier * 4 + 4
        return;
    }
    if (player.hasEffect('kubejs:flaring_heart')) {
        let flaringHeartEffect = player.getEffect('kubejs:flaring_heart')
        let flaringHeartAmplifier = flaringHeartEffect.getAmplifier();
        let flaringHeartDuration = flaringHeartEffect.getDuration();
        if (flaringHeartDuration <= 20 * 5) {
            player.setStatusMessage(`§4心火状态: §7${flaringHeartDuration} / 100  §3倍率: §e${flaringHeartAmplifier * 1.0 + 1.5}倍`);
            event.amount = event.amount * (flaringHeartAmplifier * 1.0 + 1.5);
            return;
        }
    }
}
