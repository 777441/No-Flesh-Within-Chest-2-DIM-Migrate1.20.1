// priority: 500
// 缺失的食物器官

RegistryOrgan('kubejs:hamimelon_organ')
    .addScore('chestcavity:health', 1)
    .addScore('chestcavity:endurance', 1.5)
    .addScore('chestcavity:luck', 1)
    .setCanSpawn(true)

RegistryOrgan('kubejs:watermelon_organ')
    .addScore('chestcavity:health', 1.25)
    .addScore('chestcavity:speed', 0.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:lucky_cookie_organ')
    .addScore('chestcavity:luck', 2.5)
    .addScore('chestcavity:speed', -0.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:golden_lucky_cookie_organ')
    .addScore('chestcavity:luck', 3)
    .addScore('chestcavity:speed', 0.5)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function GoldenLuckyCookieOrganEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const player = event.source.player
    const target = event.entity
    if (!player || !target || !target.isPlayer()) return
    let amplifier = Math.floor(player.getLuck() * 0.2) - 1
    target.potionEffects.add('minecraft:luck', 20 * 120, Math.max(amplifier, 0))
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:golden_lucky_cookie_organ')
        .addOnlyStrategy('entity_do_damage', GoldenLuckyCookieOrganEntityDoDamage)
)

RegistryOrgan('kubejs:cream_cookie_heart')
    .addScore('chestcavity:health', 1.75)
    .addScore('chestcavity:defense', -1)
    .addScore('chestcavity:luck', 1.5)
    .addScore('chestcavity:burning_point', 5)
    .addScore('chestcavity:freezing_point', -5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:mini_slime')
    .addScore('chestcavity:defense', -0.25)
    .addScore('chestcavity:endurance', 1.75)
    .addScore('chestcavity:luck', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:mini_vampire')
    .addScore('chestcavity:health', -0.5)
    .addScore('chestcavity:speed', 1)
    .addScore('chestcavity:fire_resistant', -1)
    .setCanSpawn(true)

RegistryOrgan('kubejs:chicken_heart')
    .addScore('chestcavity:health', 1.75)
    .addScore('chestcavity:burning_point', -5)
    .addScore('chestcavity:freezing_point', -5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:chicken_kidney')
    .addScore('chestcavity:detoxification', 0.5)
    .addScore('chestcavity:filtration', 1.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:chicken_lung')
    .addScore('chestcavity:breath_recovery', 1.5)
    .addScore('chestcavity:breath_capacity', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:chicken_strip')
    .addScore('chestcavity:luck', 0.5)
    .addScore('chestcavity:strength', 1.5)
    .setCanSpawn(true)
