// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:immortal_volcanic_rock').maxStackSize(1).texture('kubejs:item/organs/relic/immortal_volcanic_rock').tag('kubejs:relic').tag('kubejs:nether')
    event.create('kubejs:warden_core').maxStackSize(1).texture('kubejs:item/organs/relic/warden_core').tag('kubejs:relic')
    event.create('kubejs:netherite_muscle').maxStackSize(1).texture('kubejs:item/organs/relic/netherite_muscle').tag('kubejs:relic').tag('kubejs:nether').tag('kubejs:muscle')
    event.create('kubejs:ender_guardian_spine').maxDamage(10).maxStackSize(1).texture('kubejs:item/organs/relic/ender_guardian_spine').tag('kubejs:relic').tag('kubejs:ender').tag('kubejs:spine')
    event.create('kubejs:harbinger_lung').maxDamage(30).maxStackSize(1).texture('kubejs:item/organs/relic/harbinger_lung').tag('kubejs:relic').tag('kubejs:lung').tag('kubejs:machine')
    event.create('kubejs:leviathan_rib').maxStackSize(1).texture('kubejs:item/organs/relic/leviathan_rib').tag('kubejs:relic').tag('kubejs:bone').tag('kubejs:magic')
    event.create('kubejs:remnant_heart').food(food => food.hunger(2).saturation(1)).maxStackSize(1).texture('kubejs:item/organs/relic/remnant_heart').tag('kubejs:heart').tag('kubejs:relic').tag('kubejs:magic')
    event.create('kubejs:maledictus_wing').maxStackSize(1).texture('kubejs:item/organs/relic/maledictus_wing').tag('kubejs:relic').tag('kubejs:magic')
    event.create('kubejs:scylla_star_gem').maxStackSize(1).tag('kubejs:relic').tag('kubejs:magic').texture('kubejs:item/organs/relic/scylla_star_gem').tag('kubejs:gem')
    event.create('kubejs:dying_heart').food(food => food.hunger(3).saturation(1)).maxStackSize(1).tag('kubejs:relic').tag('kubejs:magic').texture('kubejs:item/organs/relic/dying_heart')
    event.create('kubejs:wither_skull').maxStackSize(1).tag('kubejs:relic').texture('kubejs:item/organs/relic/wither_skull')
    event.create('kubejs:relic_metal_plate').maxStackSize(1).texture('kubejs:item/organs/relic/relic_metal_plate').tag('kubejs:relic').tag('kubejs:machine')
    event.create('kubejs:aesegull_rib_left').maxStackSize(1).texture('kubejs:item/organs/relic/aesegull_rib_left').tag('kubejs:relic').tag('kubejs:bone')
    event.create('kubejs:aesegull_rib_right').maxStackSize(1).texture('kubejs:item/organs/relic/aesegull_rib_right').tag('kubejs:relic').tag('kubejs:bone')
    // treasure_detector_feather 物品注册已迁移至 startup_scripts/item/organ/alex.js（Alex 系）
})
