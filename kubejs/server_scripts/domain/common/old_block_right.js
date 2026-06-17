// priority: 500
// 旧版 common/block_right.js 迁移 — 方块右键特殊逻辑
// 保持模块独立，使用 BlockEvents.rightClicked 过滤器

// 沙子右键（手持肺器官 → 矿肺）
BlockEvents.rightClicked('minecraft:sand', event => {
    let item = event.item
    if (event.player && item.hasTag('kubejs:lung')) {
        let nbt = item.nbt
        item.shrink(1)
        event.player.giveInHand(Item.of('kubejs:ore_lung', nbt))
    }
})

// 钻石块右键（水瓶+雷暴 → 钻石瓶）
BlockEvents.rightClicked('minecraft:diamond_block', event => {
    if (event.player.getMainHandItem() == Item.of('minecraft:potion', '{Potion:"minecraft:water"}')
        && event.level.isThundering()
    ) {
        event.block.spawnLightning()
        event.block.set('minecraft:air')
        event.player.mainHandItem.shrink(1)
        event.player.give(Item.of('kubejs:diamond_bottle'))
    }
})

// somebosses 模组物品禁止放在副手
BlockEvents.rightClicked(event => {
    if (event.item && event.item.getMod() == 'somebosses' && event.hand == 'off_hand') {
        event.cancel()
    }
})

// 暮色森林禁止台右键销毁
BlockEvents.rightClicked('twilightforest:uncrafting_table', event => {
    event.level.destroyBlock(event.block.pos, false)
})

// Alex Capsid NBT 冲突时取消
BlockEvents.rightClicked('alexmobs:capsid', event => {
    const item = event.item
    if (!event.block.inventory || event.block.inventory.getSlots() <= 0) return
    const capsid_slot = event.block.inventory.getStackInSlot(0)
    if (!item.isEmpty()
        && item.id === capsid_slot.id
        && (item.hasNBT() || capsid_slot.hasNBT())
        && capsid_slot.nbt !== item.nbt
    ) {
        event.cancel()
    }
})
