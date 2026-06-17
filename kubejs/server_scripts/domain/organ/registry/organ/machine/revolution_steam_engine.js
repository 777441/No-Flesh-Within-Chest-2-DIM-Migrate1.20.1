// priority: 500

RegistryOrgan('kubejs:revolution_steam_engine')
    .addScore('chestcavity:endurance', 0.5)
    .addScore('chestcavity:fire_resistant', 1.5)

/**
 * @param {Object} customData
 * @param {Internal.ItemClickedEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function RevolutionSteamEngineItemRightClicked(customData, event, organItem, organIndex, slotType) {
    let player = event.player
    if (event.item != Item.of('minecraft:potion', '{Potion:"minecraft:water"}')) {
        return
    }
    revolSteamEngine(player)
    player.addItemCooldown(event.item, 20 * 20)
    event.item.shrink(1)
    player.give(Item.of('minecraft:glass_bottle'))
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:revolution_steam_engine')
        .addOnlyStrategy('item_right_clicked', RevolutionSteamEngineItemRightClicked)
)
