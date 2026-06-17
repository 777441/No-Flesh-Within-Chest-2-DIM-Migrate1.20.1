// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:diamond_bottle').maxStackSize(1).texture('kubejs:item/organs/resource/diamond_bottle').tag('kubejs:resource').tag('itemborders:diamond')

    event.create('kubejs:silk_for_cutting').maxStackSize(1).texture('kubejs:item/organs/others/silk_for_cutting').tag('kubejs:muscle')
})
