// priority: 500

RegistryOrgan('kubejs:greedy_stomach')
    .addScore('chestcavity:digestion', 0.5)
    .addScore('chestcavity:endurance', -0.5)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.FoodEatenEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function GreedyStomachFoodEaten(customData, event, organItem, organIndex, slotType) {
    event.player.giveExperiencePoints(30)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:greedy_stomach')
        .addStrategy('food_eaten', GreedyStomachFoodEaten)
)
