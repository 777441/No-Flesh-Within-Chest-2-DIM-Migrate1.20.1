// priority: 500
// 温度器官

RegistryOrgan('kubejs:chameleon_stomach')
    .addScore('chestcavity:digestion', 1.5)
    .addScore('chestcavity:defense', -1)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.ItemClickedEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function ChameleonStomachItemRightClicked(customData, event, organItem, organIndex, slotType) {
    let player = event.player
    let amplifier = 0
    let effect = 'kubejs:heat_up'
    if (event.item.id == 'minecraft:ice') {
        event.item.shrink(1)
        amplifier = -1
    }
    if (event.item.id == 'minecraft:magma_block') {
        event.item.shrink(1)
        amplifier = 1
    }
    if (amplifier == 0) return
    if (player.hasEffect('kubejs:cold_down')) {
        amplifier -= player.getEffect('kubejs:cold_down').getAmplifier() + 1
        player.removeEffect('kubejs:cold_down')
    }
    if (player.hasEffect('kubejs:heat_up')) {
        amplifier += player.getEffect('kubejs:heat_up').getAmplifier() + 1
        player.removeEffect('kubejs:heat_up')
    }
    if (amplifier != 0) {
        effect = amplifier > 0 ? 'kubejs:heat_up' : 'kubejs:cold_down'
        amplifier = Math.abs(amplifier) - 1
        player.potionEffects.add(effect, 20 * 60, amplifier)
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:chameleon_stomach')
        .addOnlyStrategy('item_right_clicked', ChameleonStomachItemRightClicked)
)

// 九头蛇沸血结晶
RegistryOrgan('kubejs:hydra_fiery_blood_essence')
    .addScore('chestcavity:health', 4)
    .addScore('chestcavity:strength', 2)
    .addScore('chestcavity:filtration', 1)
    .addScore('chestcavity:burning_point', 40)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function HydraFieryBloodEssenceEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const player = event.source.player
    if (!player) return
    if (event.source.type != 'player') return
    const fireSpellPower = player.getAttributeTotalValue('irons_spellbooks:fire_spell_power')
    event.amount = event.amount * Math.min(1 + fireSpellPower / 4, 2)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:hydra_fiery_blood_essence')
        .addOnlyStrategy('entity_do_damage', HydraFieryBloodEssenceEntityDoDamage)
)
