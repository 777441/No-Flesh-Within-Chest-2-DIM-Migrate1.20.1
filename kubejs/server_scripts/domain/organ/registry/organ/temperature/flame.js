// priority: 500
// 烈焰器官 — 温度依赖

RegistryOrgan('kubejs:flame_muscle')
    .addScore('chestcavity:strength', 1.5)
    .addScore('chestcavity:speed', 1.75)
    .addScore('chestcavity:burning_point', 20)
    .addScore('chestcavity:freezing_point', 10)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FlameMuscleEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const player = event.source.player
    if (!player) return
    const temperature = $Temperature.getTemperature(player, $Trait.BODY)
    if (temperature > 0) {
        event.amount += temperature / 2
        player.server.scheduleInTicks(2, () => {
            $Temperature.setTemperature(player, $Trait.CORE, temperature / 2 - $Temperature.getTemperature(player, $Trait.BASE))
        })
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:flame_muscle')
        .addOnlyStrategy('entity_do_damage', FlameMuscleEntityDoDamage)
)

RegistryOrgan('kubejs:flame_heart')
    .addScore('chestcavity:health', 1.5)
    .addScore('chestcavity:burning_point', 30)
    .addScore('chestcavity:freezing_point', 15)
    .setCanSpawn(true)

RegistryOrgan('kubejs:flame_stomach')
    .addScore('chestcavity:digestion', 2)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.ItemClickedEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FlameStomachItemRightClicked(customData, event, organItem, organIndex, slotType) {
    let player = event.player
    if (event.item.id == 'minecraft:coal') {
        $Temperature.add(player, $Trait.CORE, 10)
        event.item.shrink(1)
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:flame_stomach')
        .addOnlyStrategy('item_right_clicked', FlameStomachItemRightClicked)
)

RegistryOrgan('kubejs:flame_spine')
    .addScore('chestcavity:nerves', 1.5)
    .setCanSpawn(true)
