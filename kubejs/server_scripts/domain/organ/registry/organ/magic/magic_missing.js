// priority: 500
// 缺失的魔法使器官

RegistryOrgan('kubejs:plastic_heart')
    .addScore('chestcavity:health', 1.5)
    .addScore('chestcavity:endurance', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:magic_hippocampus')
    .addScore('chestcavity:nerves', 1)
    .addScore('chestcavity:luck', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:magic_muscle')
    .addScore('chestcavity:strength', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:magic_spine')
    .addScore('chestcavity:nerves', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:magic_vision')
    .addScore('chestcavity:nerves', -0.5)
    .addScore('chestcavity:metabolism', 1.25)
    .addScore('chestcavity:luck', 1)
    .setCanSpawn(true)

RegistryOrgan('kubejs:color_palette')
    .addScore('chestcavity:speed', -0.5)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function ColorPaletteEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const player = event.source.player
    if (!player) return
    if (player.getMainHandItem().id != 'kubejs:artist_wand' && player.getOffHandItem().id != 'kubejs:artist_wand') return
    if (event.source.type == 'irons_spellbooks.firebolt' || event.source.type == 'irons_spellbooks.icicle' || event.source.type == 'irons_spellbooks.poison_arrow') {
        let amplify = 30
        if (player.hasEffect('kubejs:colorful')) amplify = 20
        event.amount = event.amount + getPlayerMagicData(player).getMana() / amplify
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:color_palette')
        .addOnlyStrategy('entity_do_damage', ColorPaletteEntityDoDamage)
)

RegistryOrgan('kubejs:red_ink')
    .addScore('chestcavity:strength', -0.25)
    .addScore('chestcavity:nutrition', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:blood_moon_wand')
    .addScore('chestcavity:nerves', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:is_rabbit')
    .addScore('chestcavity:luck', 2)
    .setCanSpawn(true)
