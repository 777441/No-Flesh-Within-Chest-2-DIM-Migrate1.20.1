// priority: 500
// 缺失的杂项器官

// 资源系列
RegistryOrgan('kubejs:ore_lung')
    .addScore('chestcavity:health', -0.25)
    .addScore('chestcavity:nerves', -0.25)
    .addScore('chestcavity:breath_recovery', 1)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.BlockBrokenEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function OreLungBlockBroken(customData, event, organItem, organIndex, slotType) {
    if (!event.block.item.hasTag('forge:stone')) return
    let player = event.player

    // 获取主手 Tetra 工具的 silicosis 效果等级
    let heldItem = player.mainHandItem
    /**@type {Internal.ModularItem} */
    let modularItem = heldItem.getItem()
    let silicosisLevel = 0
    if (TetraJSUtils.isModularItem(modularItem)) {
        silicosisLevel = modularItem.getEffectLevel(heldItem, 'kubejs:silicosis')
    }

    let count = 0
    if (player.persistentData.contains(resourceCount)) {
        count = player.persistentData.getInt(resourceCount)
    }
    // 触发几率 = 3% + silicosisLevel * 3%
    if (count >= 64 && Math.random() <= 0.03 + silicosisLevel * 0.03) {
        let luck = Math.max(player.getLuck(), 1)
        if (luck > 10) {
            player.give(Item.of('kubejs:rare_mineral_cluster').withCount(Math.max(Math.floor(4 - 40 / luck), 1)))
        }
        player.give(Item.of('kubejs:common_mineral_cluster').withCount(Math.max(Math.floor(4 - 4 / luck), 1)))
        // 5级以下消耗资源，5级以上免费
        if (silicosisLevel < 5) {
            count = count - 64
            updateResourceCount(player, count)
        }
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:ore_lung')
        .addOnlyStrategy('block_broken', OreLungBlockBroken)
)

RegistryOrgan('kubejs:desire_of_midas')
    .addScore('chestcavity:strength', -1)
    .addScore('chestcavity:breath_recovery', -0.5)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.BlockBrokenEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function DesireOfMidasBlockBroken(customData, event, organItem, organIndex, slotType) {
    let player = event.player
    if (!player.persistentData.contains(resourceCount)) return
    let count = player.persistentData.getInt(resourceCount)
    if (count > 150 && Math.random() < 0.05) {
        if (Math.random() < 0.15) {
            event.block.popItem('lightmanscurrency:coin_gold')
            event.block.set('minecraft:air')
        } else {
            event.block.popItem('minecraft:gold_block')
            event.block.set('minecraft:air')
        }
        updateResourceCount(player, count - 150)
        event.cancel()
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:desire_of_midas')
        .addOnlyStrategy('block_broken', DesireOfMidasBlockBroken)
)

RegistryOrgan('kubejs:redstone_furnace')
    .addScore('chestcavity:health', 1.25)
    .addScore('chestcavity:defense', -0.5)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.ItemClickedEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function RedstoneFurnaceItemRightClicked(customData, event, organItem, organIndex, slotType) {
    if (event.item.id != 'minecraft:redstone_block') return
    let player = event.player
    let count = 100
    if (player.persistentData.contains(resourceCount)) {
        count = player.persistentData.getInt(resourceCount) + count
    }
    updateResourceCount(player, count)
    player.swing()
    player.addItemCooldown(event.item, 20 * 60)
    event.item.shrink(1)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:redstone_furnace')
        .addOnlyStrategy('item_right_clicked', RedstoneFurnaceItemRightClicked)
)

// 魔法/杂项
RegistryOrgan('kubejs:holy_eyeball')
    .addScore('chestcavity:filtration', -0.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:excited_appendix')
    .addScore('chestcavity:explosive', 2)
    .addScore('chestcavity:creepy', 1)
    .addScore('chestcavity:luck', 1.5)
    .setCanSpawn(true)

// 位置器官
RegistryOrgan('kubejs:stomach_tumor')
    .addScore('chestcavity:endurance', 0.5)
    .addScore('chestcavity:digestion', 1)
    .setCanSpawn(true)

// 感染系列
RegistryOrgan('kubejs:origin_of_tumor')
    .addScore('chestcavity:luck', 2.0)
    .setCanSpawn(true)

// 下界系列
RegistryOrgan('kubejs:nether_rib')
    .addScore('chestcavity:defense', 1.25)
    .addScore('chestcavity:fire_resistant', 0.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:nether_muscle')
    .addScore('chestcavity:strength', 1.25)
    .addScore('chestcavity:fire_resistant', 0.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:nether_heart')
    .addScore('chestcavity:health', 0.75)
    .addScore('chestcavity:fire_resistant', 1)
    .setCanSpawn(true)

RegistryOrgan('kubejs:nether_spine')
    .addScore('chestcavity:nerves', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:crimson_mosquito_mouthparts')
    .addScore('chestcavity:strength', 0.5)
    .addScore('chestcavity:defense', -1)
    .setCanSpawn(true)

// 杂项
RegistryOrgan('kubejs:creeper_appendix')
    .addScore('chestcavity:luck', 0.75)
    .addScore('chestcavity:creepy', 1)
    .addScore('chestcavity:explosive', 1)
    .setCanSpawn(true)
