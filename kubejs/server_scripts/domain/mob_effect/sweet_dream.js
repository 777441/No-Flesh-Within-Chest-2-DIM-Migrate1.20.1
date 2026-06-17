// priority: 800
// 旧版 mob_effect/sweet_dream.js 迁移
function sweetDreamPlayerHurtByOthers(event, data) {
    let player = event.entity
    if (player.hasEffect('kubejs:sweet_dream')) {
        let itemMap = getPlayerChestCavityItemMap(player);
        if (!itemMap.has('kubejs:candy_heart')) return;
        let sweetDreamPotion = player.getEffect('kubejs:sweet_dream')
        if (sweetDreamPotion.getDuration() * (sweetDreamPotion.getAmplifier() + 1) < event.amount * 20) {
            player.removeEffect('kubejs:sweet_dream');
            if (itemMap.has('kubejs:candy_pancreas')) player.potionEffects.add('minecraft:absorption', 20 * 30, 4)
            event.amount = 0
            return;
        }
        let duration = Math.floor(sweetDreamPotion.getDuration() - event.amount * 20 * 2 / (sweetDreamPotion.getAmplifier() + 1));
        duration = Math.min(duration, 600 * 20)
        let amplifier = sweetDreamPotion.getAmplifier();
        player.removeEffect('kubejs:sweet_dream')
        player.potionEffects.add('kubejs:sweet_dream', duration, amplifier, false, false);
        event.amount = 0
        return;
    }

    if (event.amount >= 5 && !player.hasEffect('kubejs:sweet_dream')) {
        let itemMap = getPlayerChestCavityItemMap(player);
        if (!itemMap.has('kubejs:magic_hippocampus') || player.cooldowns.isOnCooldown(Item.of('kubejs:magic_hippocampus'))) return;
        let durationMulti = 1;
        let amplifierMulti = 0;
        player.cooldowns.addCooldown(Item.of('kubejs:magic_hippocampus'), 60)
        if (itemMap.has('kubejs:magic_muscle')) durationMulti = durationMulti + itemMap.get('kubejs:magic_muscle').length
        if (itemMap.has('kubejs:magic_spine')) amplifierMulti = amplifierMulti + Math.floor(itemMap.get('kubejs:magic_spine').length / 2)
        if (!player.hasEffect('kubejs:sweet_dream')) player.potionEffects.add('kubejs:sweet_dream', 20 * 10 * durationMulti, amplifierMulti, false, false);
    }
}
