// priority: 500
/**
 * kubejs:silicosis - 矽肺病
 * 独立于 ore_lung 器官的 Tetra 工具效果
 * 挖掘石头类方块时概率触发矿物掉落
 * 触发几率 = 3% + level * 3%
 * 5级以上不消耗资源
 *
 * 注意：如果玩家同时拥有 ore_lung 器官，ore_lung 的 organ strategy 也会处理 silicosis，
 * 此效果提供独立的额外触发机会
 */

const SILICOSIS_RESOURCE_KEY = 'silicosis_resource'

BlockEvents.broken(event => {
    const player = event.player
    if (!player) return

    // 仅石头类方块
    if (!event.block.hasTag('forge:stone')) return

    let heldItem = player.mainHandItem
    /**@type {Internal.ModularItem} */
    let modularItem = heldItem.getItem()
    if (!TetraJSUtils.isModularItem(modularItem)) return

    let effectLevel = modularItem.getEffectLevel(heldItem, 'kubejs:silicosis')
    if (effectLevel <= 0) return

    // 获取独立资源计数
    let count = player.persistentData.getInt(SILICOSIS_RESOURCE_KEY) || 0
    if (count < 64) {
        count = count + 1
        player.persistentData.putInt(SILICOSIS_RESOURCE_KEY, count)
        return
    }

    // 触发几率 = 3% + level * 3%
    let triggerChance = 0.03 + effectLevel * 0.03
    if (Math.random() > triggerChance) return

    // 触发成功 - 掉落矿物
    let luck = Math.max(player.getLuck(), 1)

    if (luck > 10) {
        let rareCount = Math.max(Math.floor(4 - 40 / luck), 1)
        if (Item.exists('kubejs:rare_mineral_cluster')) {
            player.give(Item.of('kubejs:rare_mineral_cluster').withCount(rareCount))
        } else {
            player.give(Item.of('minecraft:diamond').withCount(rareCount))
        }
    }

    let commonCount = Math.max(Math.floor(4 - 4 / luck), 1)
    if (Item.exists('kubejs:common_mineral_cluster')) {
        player.give(Item.of('kubejs:common_mineral_cluster').withCount(commonCount))
    } else {
        let ores = ['minecraft:raw_iron', 'minecraft:raw_copper', 'minecraft:raw_gold', 'minecraft:coal']
        let ore = ores[Math.floor(Math.random() * ores.length)]
        player.give(Item.of(ore).withCount(commonCount * 2))
    }

    // 5级以下消耗资源
    if (effectLevel < 5) {
        count = count - 64
        player.persistentData.putInt(SILICOSIS_RESOURCE_KEY, count)
    }
})
