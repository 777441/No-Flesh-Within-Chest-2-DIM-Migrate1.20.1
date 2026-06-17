// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:illithids').maxStackSize(1).texture('kubejs:item/organs/warp/illithids').tag('kubejs:warp')
})
