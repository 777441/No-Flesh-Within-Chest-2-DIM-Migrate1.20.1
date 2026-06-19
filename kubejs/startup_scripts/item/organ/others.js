// priority: 500
StartupEvents.registry('item', event => {
    // 资源
    event.create('kubejs:ore_lung').maxStackSize(1).texture('kubejs:item/organs/resource/ore_lung').tag('kubejs:resource').tag('kubejs:lung').tag('itemborders:iron').tag('kubejs:break_only')
    event.create('kubejs:desire_of_midas').maxStackSize(1).texture('kubejs:item/organs/resource/desire_of_midas').tag('kubejs:resource').tag('kubejs:break')
    event.create('kubejs:redstone_furnace').maxStackSize(1).texture('kubejs:item/organs/resource/redstone_furnace').tag('kubejs:resource').tag('kubejs:heart').tag('kubejs:break_only')
    // 魔法/杂项
    event.create('kubejs:holy_eyeball').maxStackSize(1).texture('kubejs:item/organs/others/holy_eyeball').tag('kubejs:magic').tag('kubejs:muscle').tag('itemborders:gold').tag('kubejs:active')
    event.create('kubejs:excited_appendix').maxStackSize(1).texture('kubejs:item/organs/others/excited_appendix').tag('kubejs:appendix')
    // 位置
    event.create('kubejs:stomach_tumor').maxStackSize(1).texture('kubejs:item/organs/others/stomach_tumor').tag('kubejs:stomach')
    // 感染
    event.create('kubejs:origin_of_tumor').maxStackSize(1).texture('kubejs:item/organs/infected/origin_of_tumor').tag('kubejs:infected').tag('kubejs:eat_effect_only').tag('itemborders:diamond')
    // 下界
    event.create('kubejs:nether_rib').maxStackSize(1).texture('kubejs:item/organs/nether/nether_rib').tag('kubejs:nether').tag('kubejs:rib')
    event.create('kubejs:nether_muscle').maxStackSize(1).texture('kubejs:item/organs/nether/nether_muscle').tag('kubejs:nether').tag('kubejs:muscle')
    event.create('kubejs:nether_heart').maxStackSize(1).texture('kubejs:item/organs/nether/nether_heart').tag('kubejs:nether').tag('kubejs:heart')
    event.create('kubejs:nether_spine').maxStackSize(1).texture('kubejs:item/organs/nether/nether_spine').tag('kubejs:nether').tag('kubejs:spine')
    event.create('kubejs:crimson_mosquito_mouthparts').maxStackSize(1).texture('kubejs:item/organs/nether/crimson_mosquito_mouthparts').tag('kubejs:nether')
    // 杂项
    event.create('kubejs:creeper_appendix').maxStackSize(1).texture('kubejs:item/organs/others/creeper_appendix').tag('kubejs:appendix')
    // 剩余
    event.create('kubejs:long_lasting_pill').maxStackSize(1).texture('kubejs:item/organs/others/long_lasting_pill').tag('kubejs:evolution')
    event.create('kubejs:long_lasting_pill_gold').maxStackSize(1).texture('kubejs:item/organs/others/long_lasting_pill_gold').tag('kubejs:evolution')
    event.create('kubejs:d8').maxStackSize(1).texture('kubejs:item/organs/others/d8').tag('kubejs:legends')
})
