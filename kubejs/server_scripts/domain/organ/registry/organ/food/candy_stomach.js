// priority: 500

RegistryOrgan('kubejs:candy_stomach')
    .addScore('chestcavity:nutrition', 1.5)
    .addScore('chestcavity:digestion', 2)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.FoodEatenEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function CandyStomachFoodEaten(customData, event, organItem, organIndex, slotType) {
    if (!event.item.hasTag('extradelight:candy_bowl_valid')) {
        return
    }
    event.player.addItemCooldown(event.item, 20 * 300)
    if (!event.player.hasEffect('kubejs:sweet_dream')) {
        event.player.potionEffects.add('kubejs:sweet_dream',
            event.item.getFoodProperties(event.player).getNutrition() * 30 * 20, 0)
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:candy_stomach')
        .addOnlyStrategy('food_eaten', CandyStomachFoodEaten)
)
