// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:prismarine_crown').maxStackSize(1).texture('kubejs:item/organs/legends/prismarine_crown').tag('kubejs:legend')
    event.create('kubejs:infinity_force').maxStackSize(1).texture('kubejs:item/organs/infinity/infinity_force').tag('kubejs:legend')
    event.create('kubejs:doppelganger').maxStackSize(1).texture('kubejs:item/organs/legends/doppelganger').tag('kubejs:legend')
})
