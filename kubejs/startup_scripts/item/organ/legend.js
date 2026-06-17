// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:prismarine_crown').maxStackSize(1).texture('kubejs:item/organs/legends/prismarine_crown').tag('kubejs:legend')

    event.create('kubejs:infinity_beats').maxStackSize(1).texture('kubejs:item/organs/infinity/infinity_beats').tag('kubejs:infinity').tag('itemborders:diamond')
    event.create('kubejs:doppelganger').maxStackSize(1).texture('kubejs:item/organs/legends/doppelganger').tag('kubejs:legend').tag('kubejs:evolution').tag('itemborders:gold')
    event.create('kubejs:pandora_inactive').maxStackSize(1).rarity('epic').texture('kubejs:item/organs/legends/pandora_inactive').tag('kubejs:legend').tag('kubejs:evolution').tag('itemborders:diamond')
    event.create('kubejs:infinity_force').maxStackSize(1).texture('kubejs:item/organs/infinity/infinity_force').tag('kubejs:infinity').tag('itemborders:diamond')
    event.create('kubejs:genesis').maxStackSize(1).texture('kubejs:item/organs/legends/genesis').tag('kubejs:legend').tag('kubejs:exclued_lucky_block').tag('itemborders:diamond')
    event.create('kubejs:go_camping').maxStackSize(1).texture('kubejs:item/organs/legends/go_camping').tag('kubejs:legend').tag('itemborders:diamond')
})
