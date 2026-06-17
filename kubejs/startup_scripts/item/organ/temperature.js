// priority: 500
StartupEvents.registry('item', event => {
    // 烈焰
    event.create('kubejs:flame_muscle').maxStackSize(1).texture('kubejs:item/organs/flame/flame_muscle').tag('kubejs:flame').tag('kubejs:muscle')
    event.create('kubejs:flame_heart').maxStackSize(1).texture('kubejs:item/organs/flame/flame_heart').tag('kubejs:flame').tag('kubejs:heart')
    event.create('kubejs:flame_stomach').maxStackSize(1).texture('kubejs:item/organs/flame/flame_stomach').tag('kubejs:flame').tag('kubejs:stomach')
    event.create('kubejs:flame_spine').maxStackSize(1).texture('kubejs:item/organs/flame/flame_spine').tag('kubejs:flame').tag('kubejs:spine')
    // 冰霜
    event.create('kubejs:ice_heart').maxStackSize(1).texture('kubejs:item/organs/ice/ice_heart').tag('kubejs:ice').tag('kubejs:heart')
    event.create('kubejs:ice_rib').maxStackSize(1).texture('kubejs:item/organs/ice/ice_rib').tag('kubejs:ice').tag('kubejs:rib')
    event.create('kubejs:ice_lung').maxStackSize(1).texture('kubejs:item/organs/ice/ice_lung').tag('kubejs:ice').tag('kubejs:lung').tag('kubejs:temperature_only')
    event.create('kubejs:ice_intestine').maxStackSize(1).texture('kubejs:item/organs/ice/ice_intestine').tag('kubejs:ice').tag('kubejs:intestine')
    event.create('kubejs:ice_piece').maxStackSize(1).texture('kubejs:item/organs/ice/ice_piece').tag('kubejs:ice')
    // 温度
    event.create('kubejs:chameleon_stomach').maxStackSize(1).texture('kubejs:item/organs/temperature/chameleon_stomach').tag('kubejs:temperature').tag('kubejs:stomach')
    // 九头蛇
    event.create('kubejs:hydra_fiery_blood_essence').maxStackSize(1).texture('kubejs:item/organs/twilightforest/hydra_fiery_blood_essence').tag('kubejs:flame').tag('kubejs:heart').tag('kubejs:temperature_only')
})
