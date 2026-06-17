// priority: 500
PlayerEvents.loggedIn(event => {
    const player = event.player
    FirstLoginInit(player)
    InitClientOrganSkill(player) // 同步客户端SkillWheel
    SyncQueuedData(player) // 队列消息同步
    InitClientISSSpellData(player) // 同步客户端ISSSpellData
    // 延迟初始化胸腔缓存映射（等待 chestcavity 实例就绪）
    Utils.server.scheduleInTicks(20, () => {
        initChestCavityIntoMap(player, false)
    })
})

/**
 * @param {Internal.ServerPlayer} player 
 */
function FirstLoginInit(player) {
    if (!player.persistentData.contains('inited') || !player.persistentData.get('inited')) {
        player.seenCredits = true
        player.persistentData.put('inited', true)
        player.give('ftbquests:book')

        // 旧版首次登录逻辑：清包+初始化胸腔+给指南书合集+给彩色糖果
        Utils.server.scheduleInTicks(5, () => {
            player.inventory.clear()
            let optional = $ChestCavityEntity.of(player)
            if (optional.isPresent()) {
                let cc = optional.get().getChestCavityInstance()
                // 使用 ChestCavityUtil.openChestCavity 初始化胸腔（与 ChestOpener.java 一致）
                ChestCavityUtils.openChestCavity(cc)
                initChestCavityIntoMap(player, true)
            }
            player.give(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{alexsmobs:{0:{Count:1b,id:"alexsmobs:animal_dictionary"}},ftbquests:{0:{Count:1b,id:"ftbquests:book"}},irons_spellbooks:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}}},weaponmaster:{0:{Count:1b,id:"weaponmaster:tutorialbook"}}},"eccentrictome:version":1}'))
            player.give(Item.of('kubejs:colorful_candy'))
        })
    }
}

/**
 * 
 * @param {Internal.ServerPlayer} player 
 */
function InitClientOrganSkill(player) {
    let data = new $CompoundTag()
    data.putString('type', 'refresh')
    player.sendData('update_organ_skill_wheel_item', data)
}