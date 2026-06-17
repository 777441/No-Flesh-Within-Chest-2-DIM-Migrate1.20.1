// priority: 800
// 旧版 curios/curio_global_event.js 迁移 — Curios装备/卸下事件
global.archivistEyeGlassOnEquip = (itemFrom, ctx, itemTo) => {
    if (!ctx.entity().isPlayer()) return
    let player = ctx.entity()
    initAllBar(player)
}

global.archivistEyeGlassOnUnequip = (itemFrom, ctx, itemTo) => {
    if (!ctx.entity().isPlayer()) return
    ctx.entity().paint({ barBackGround: { visible: false }, resourceBarOverlay: { visible: false }, warpBarOverlay: { visible: false } })
}

global.archivistEyeGlassTick = (item, ctx) => {
    let player = ctx.entity()
    if (player.level.isClientSide()) return
    if (player.age % 20 != 0) return
    if (!player.isPlayer()) return
    updateSideBar(player, true)
}

global.bunnyHoppersOnEquip = (itemFrom, ctx, itemTo) => {
    ctx.entity().potionEffects.add('minecraft:jump_boost', 20 * 5, 1, false, false)
}

global.bunnyHoppersTick = (item, ctx) => {
    let entity = ctx.entity()
    if (entity.level.isClientSide()) return
    if (entity.age % 80 != 0) return
    entity.potionEffects.add('minecraft:jump_boost', 20 * 5, 1, false, false)
}
