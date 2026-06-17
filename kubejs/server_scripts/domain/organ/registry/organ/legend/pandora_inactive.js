// priority: 500

RegistryOrgan('kubejs:pandora_inactive')
    .addScore('chestcavity:crystalsynthesis', 0.25)
    .addScore('chestcavity:speed', 1)
    .addScore('chestcavity:endurance', 1)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EnchantmentTableServerEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function PandoraInactivePlayerEnchant(customData, event, organItem, organIndex, slotType) {
    const slotList = [0, 1, 2]
    slotList.forEach(slot => {
        let enchantSlot = event.get(slot)
        let needEnchantList = []
        enchantSlot.removeEnchantments((enchantment, level) => {
            if (level >= 5) {
                needEnchantList.push({ enchant: enchantment, level: 7 })
                return true
            }
            if (level >= 3) {
                needEnchantList.push({ enchant: enchantment, level: 5 })
                return true
            }
            return false
        })
        needEnchantList.forEach(needEnchant => {
            enchantSlot.addEnchantment(needEnchant.enchant, needEnchant.level)
        })
        enchantSlot.updateClue()
    })
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:pandora_inactive')
        .addOnlyStrategy('player_enchant', PandoraInactivePlayerEnchant)
)
