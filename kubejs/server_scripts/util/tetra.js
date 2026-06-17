// priority: 1000
// 旧版 utils/tetra.js 迁移
function getItemEffectsInBothHands(player) {
    let mainHandItemEffects = TetraEffect.getAllItemEffectResults(player.getMainHandItem())
    let offHandItemEffects = TetraEffect.getAllItemEffectResults(player.getOffHandItem())
    let effects = []
    if (mainHandItemEffects) effects = effects.concat(mainHandItemEffects)
    if (offHandItemEffects) effects = effects.concat(offHandItemEffects)
    return effects
}

function getItemEffect(name) {
    return global.TetraEffect[name]
}
