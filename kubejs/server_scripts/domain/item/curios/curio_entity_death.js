// priority: 800
// 旧版 curios/entity_death.js 迁移 — Curios死亡事件
// 1.20.1 使用 CuriosCapabilities.INVENTORY 替代旧版 $CuriosApi
EntityEvents.death(event => {
    let player = event.source.player
    if (!player) return

    let curiosCap = GetCuriosInventoryCap(player)
    if (!curiosCap) return

    let curios = curiosCap.getCurios()
    if (!curios) return

    for (let typeName of curios.keySet()) {
        let slotHandler = curios.get(typeName)
        if (!slotHandler) continue
        let stacks = slotHandler.getStacks()
        if (!stacks) continue
        for (let slot = 0; slot < slotHandler.getSlots(); slot++) {
            let item = stacks.getStackInSlot(slot);
            if (!item || item.isEmpty()) continue
            if (curiosDeathStrategies[item.id]) {
                curiosDeathStrategies[item.id](event, slotHandler, slot, item)
            }
        }
    }
})

const curiosDeathStrategies = {
    'kubejs:god_bless_empty_necklace': function (event, slotHandler, slot, item) {
        if (!bossesOfMassDestructionBossTypeList.some(ctx => ctx == event.entity.type)) return
        slotHandler.setStackInSlot(slot, Item.of('kubejs:god_bless_full_necklace'));
    },
}
