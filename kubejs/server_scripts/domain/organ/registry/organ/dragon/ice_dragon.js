// priority: 500
// 冰龙器官

RegistryOrgan('kubejs:ice_dragon_lung')
    .addScore('chestcavity:breath_recovery', 1.5)
    .addScore('chestcavity:breath_capacity', 1.5)
    .addScore('chestcavity:endurance', 1.5)
    .addScore('chestcavity:defense', 0.25)
    .addScore('chestcavity:burning_point', -5)
    .addScore('chestcavity:freezing_point', -15)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_dragon_muscle')
    .addScore('chestcavity:strength', 1.5)
    .addScore('chestcavity:speed', 1.5)
    .addScore('chestcavity:defense', 0.25)
    .addScore('chestcavity:freezing_point', -15)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_dragon_heart')
    .addScore('chestcavity:health', 1.5)
    .addScore('chestcavity:defense', 0.25)
    .addScore('chestcavity:freezing_point', -15)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_dragon_intestine')
    .addScore('chestcavity:nutrition', 1.5)
    .addScore('chestcavity:defense', 0.25)
    .addScore('chestcavity:burning_point', -5)
    .addScore('chestcavity:freezing_point', -15)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_dragon_rib')
    .addScore('chestcavity:defense', 1.75)
    .addScore('chestcavity:freezing_point', -5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_dragon_spine')
    .addScore('chestcavity:defense', 1)
    .addScore('chestcavity:nerves', 1.5)
    .addScore('chestcavity:burning_point', -5)
    .addScore('chestcavity:freezing_point', -15)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_dragon_spleen')
    .addScore('chestcavity:metabolism', 1.5)
    .addScore('chestcavity:defense', 0.25)
    .addScore('chestcavity:freezing_point', -15)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_dragon_stomach')
    .addScore('chestcavity:digestion', 1.5)
    .addScore('chestcavity:defense', 0.25)
    .addScore('chestcavity:freezing_point', -10)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_dragon_kidney')
    .addScore('chestcavity:filtration', 1.5)
    .addScore('chestcavity:defense', 0.25)
    .addScore('chestcavity:burning_point', 5)
    .addScore('chestcavity:freezing_point', -15)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_dragon_liver')
    .addScore('chestcavity:detoxification', 1.5)
    .addScore('chestcavity:defense', 0.25)
    .addScore('chestcavity:freezing_point', -15)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_dragon_appendix')
    .addScore('chestcavity:luck', 1.5)
    .addScore('chestcavity:defense', 0.25)
    .addScore('chestcavity:burning_point', -10)
    .addScore('chestcavity:freezing_point', -15)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_dragon_bead')
    .addScore('chestcavity:crystalsynthesis', 2.5)
    .addScore('chestcavity:knockback_resistant', 1.5)
    .addScore('chestcavity:endurance', 0.5)
    .addScore('chestcavity:health', 1.5)
    .addScore('chestcavity:defense', 0.25)
    .addScore('chestcavity:burning_point', -5)
    .addScore('chestcavity:freezing_point', -20)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function IceDragonBeadKeyActive(customData, event, organItem, organIndex, slotType) {
    let player = event.player
    let magicData = getPlayerMagicData(player)
    let manaCost = magicData.getMana()
    let amplifier = Math.max(2 * Math.sqrt(player.getMaxHealth()), 1)
    overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'cone_of_cold'), amplifier, player, false)
    magicData.setMana(Math.max((manaCost - 500), 0))
    if (manaCost < 500) {
        player.setHealth(Math.max((player.getHealth() - (500 - manaCost) * 0.5), 1))
    }
    player.addItemCooldown(organItem, 20 * 30)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:ice_dragon_bead')
        .addOnlyStrategy('key_active', IceDragonBeadKeyActive)
)
