// priority: 500
// 旧版 client_scripts/key_bind.js 迁移
ClientEvents.tick(event => {
    if (global.OrganSkill.consumeClick()) {
        event.player.sendData('ogran_key_pressed')
    }
})
