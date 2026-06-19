// priority: 500

RegistryOrgan('kubejs:infinity_force')
    .addScore('chestcavity:health', -2)
    .addScore('chestcavity:defense', -2)
    .addScore('chestcavity:breath_recovery', -2)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function InfinityForceEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    let player = event.source.player
    let attriMap = getPlayerAttributeMap(player)
    if (!player.hasItemInSlot('mainhand') && !player.hasItemInSlot('offhand')) {
        let value = 4
        if (organItem.nbt?.forgeTimes) {
            value = value + organItem.nbt.forgeTimes * 1
        }
        if (attriMap.has(global.TEMP_ATTACK_UP.name)) {
            value = value + attriMap.get(global.TEMP_ATTACK_UP.name)
        }
        attriMap.set(global.TEMP_ATTACK_UP.name, value)
        player.modifyAttribute(global.TEMP_ATTACK_UP.key, global.TEMP_ATTACK_UP.name, value, global.TEMP_ATTACK_UP.operation)
        setPlayerAttributeMap(player, attriMap)
        customData.thornsDamage = customData.thornsDamage + value
    } else {
        player.removeAttribute(global.TEMP_ATTACK_UP.key, global.TEMP_ATTACK_UP.name)
        attriMap.set(global.TEMP_ATTACK_UP.name, 0)
        setPlayerAttributeMap(player, attriMap)
    }
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LootContextJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function InfinityForceEntityLoot(customData, event, organItem, organIndex, slotType) {
    const bossTypeList = global.BOSS_TYPE_LIST || [
        'minecraft:ender_dragon',
        'minecraft:wither',
        'minecraft:warden'
    ]
    if (Math.random() > Math.max(0.03 * event.killerEntity.getLuck(), 0.03)) {
        return
    }
    if (bossTypeList.some(ele => ele == event.entity.getType())) {
        let forgeTimes = 0
        if (organItem.nbt?.forgeTimes) {
            forgeTimes = organItem.nbt.forgeTimes
        }
        event.addLoot(Item.of('kubejs:infinity_force', { forgeTimes: Math.floor(Math.random() * forgeTimes) }))
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:infinity_force')
        .addOnlyStrategy('entity_do_damage', InfinityForceEntityDoDamage)
        .addOnlyStrategy('entity_loot', InfinityForceEntityLoot)
)
