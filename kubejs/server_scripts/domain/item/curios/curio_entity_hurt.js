// priority: 500
// 旧版 curios/entity_hurt.js 迁移 — Curios受伤事件
// 1.20.1 使用 CuriosCapabilities.INVENTORY 替代旧版 $CuriosApi
function curiosPlayerHurtByOthers(event, data) {
    let player = event.entity;
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
            if (player.getHealth() - event.amount <= 4) {
                let item = stacks.getStackInSlot(slot);
                if (!item || item.isEmpty()) continue
                if (curiosHurtStrategies[item.id]) {
                    curiosHurtStrategies[item.id](event, slotHandler, slot, item, data)
                }
            }
        }
    }
}

const curiosHurtStrategies = {
    'kubejs:friend_to_the_end': function (event, slotHandler, slot, item, data) {
        if (item.hasNBT() && item.nbt.friendName) {
            let friend = Utils.server.getPlayer(item.nbt.friendName)
            if (friend && friend.isLiving()) {
                event.entity.teleportTo(friend.level.getDimension(), friend.x, friend.y, friend.z, 0, 0)
                slotHandler.setStackInSlot(slot, Item.of('irons_spellbooks:silver_ring'));
                event.entity.setHealth(1)
                event.amount = 0
            }
        }
    },
}
