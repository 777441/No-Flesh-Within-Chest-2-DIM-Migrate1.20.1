// priority: 500
RegistryOrgan('kubejs:dragon_blood_heart')
    .addScore('chestcavity:health', 2)
    .addScore('kubejs:dragon_blood', 1)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function DragonBloodHeartChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    if (!entity.isPlayer()) return
    const chestCavity = event.chestCavity
    AddSpellSelection(customData, chestCavity, 'kubejs:advance_dragon_breath', 1)
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function DragonBloodHeartTakeOff(customData, event, organItem, organIndex, slotType) {
    const { entity, chestCavity } = event
    if (!entity.isPlayer()) return
    RemoveSpellSelectionBySpellId(customData, chestCavity, 'kubejs:advance_dragon_breath')
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.NetworkEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function DragonBloodHeartKeyActive(customData, event, organItem, organIndex, slotType) {
    const player = event.player
    const chestCavity = player.chestCavityInstance
    if (!chestCavity) return
    let dragonSet = new Set()
    chestCavity.inventory.allItems.forEach(item => {
        if (!item || item.isEmpty()) return
        if (item.hasTag('kubejs:dragon')) {
            dragonSet.add(String(item.id))
        }
    })
    let amplifier = Math.max(dragonSet.size - 1, 0)
    let duration = Math.max(Math.floor(chestCavity.getOrganScore('chestcavity:nerves') * 20), 0)
    player.potionEffects.add('kubejs:dragon_power', duration, amplifier, false, false)
    player.addItemCooldown(organItem, 20 * 180)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:dragon_blood_heart')
        .addOnlyStrategy('chest_cavity_update', DragonBloodHeartChestCavityUpdate)
        .addOnlyStrategy('organ_take_off', DragonBloodHeartTakeOff)
        .addOnlyStrategy('key_active', DragonBloodHeartKeyActive)
)

