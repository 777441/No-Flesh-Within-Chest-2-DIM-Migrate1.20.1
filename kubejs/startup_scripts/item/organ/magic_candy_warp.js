// priority: 500
StartupEvents.registry('item', event => {
    // 糖果
    event.create('kubejs:candy_heart').maxStackSize(1).texture('kubejs:item/organs/candy/candy_heart').tag('kubejs:candy').tag('kubejs:heart')
    event.create('kubejs:candy_stomach').maxStackSize(1).texture('kubejs:item/organs/candy/candy_stomach').tag('kubejs:candy').tag('kubejs:stomach').tag('kubejs:eat_effect_only')
    event.create('kubejs:candy_pancreas').maxStackSize(1).texture('kubejs:item/organs/candy/candy_pancreas').tag('kubejs:candy').tag('kubejs:pancreas')
    // 魔法使
    event.create('kubejs:plastic_heart').maxStackSize(1).texture('kubejs:item/organs/magic/plastic_heart').tag('kubejs:magic').tag('kubejs:heart').tag('kubejs:overmagic_only').tag('itemborders:diamond')
    event.create('kubejs:magic_hippocampus').maxStackSize(1).texture('kubejs:item/organs/magic/magic_hippocampus').tag('kubejs:magic').tag('itemborders:diamond')
    event.create('kubejs:magic_muscle').maxStackSize(1).texture('kubejs:item/organs/magic/magic_muscle').tag('kubejs:magic').tag('kubejs:muscle').tag('itemborders:diamond')
    event.create('kubejs:magic_spine').maxStackSize(1).texture('kubejs:item/organs/magic/magic_spine').tag('kubejs:magic').tag('kubejs:spine').tag('itemborders:diamond')
    event.create('kubejs:magic_vision').maxStackSize(1).texture('kubejs:item/organs/magic/magic_vision').tag('kubejs:magic').tag('kubejs:active').tag('itemborders:diamond')
    event.create('kubejs:color_palette').maxStackSize(1).texture('kubejs:item/organs/magic/color_palette').tag('kubejs:magic').tag('kubejs:damage_only').tag('itemborders:gold')
    event.create('kubejs:red_ink').maxStackSize(1).texture('kubejs:item/organs/magic/red_ink').tag('kubejs:magic').tag('itemborders:gold').tag('kubejs:bear')
    event.create('kubejs:blood_moon_wand').maxStackSize(1).texture('kubejs:item/organs/magic/blood_moon_wand').modifyAttribute('irons_spellbooks:blood_spell_power', 'kubejsBloodSpellPowerWeaponBoost', 0.3, 'addition').tag('kubejs:magic').tag('kubejs:active').tag('itemborders:diamond')
    event.create('kubejs:is_rabbit').maxStackSize(1).texture('kubejs:item/organs/magic/is_rabbit').tag('kubejs:magic').tag('kubejs:player_tick_only')
    // 禁忌
    event.create('kubejs:the_third_eye').maxStackSize(1).rarity('epic').texture('kubejs:item/organs/warp/the_third_eye').tag('kubejs:warp').tag('kubejs:damage_only').tag('itemborders:diamond')
    event.create('kubejs:fish_in_warp').maxStackSize(1).texture('kubejs:item/organs/warp/fish_in_warp').tag('kubejs:warp').tag('kubejs:organ_count_only')
    event.create('kubejs:disenchantment_paper').maxStackSize(1).texture('kubejs:item/organs/warp/disenchantment_paper').tag('kubejs:warp').tag('kubejs:key_pressed')
    event.create('kubejs:warp_bubble').maxStackSize(1).texture('kubejs:item/organs/warp/warp_bubble').tag('kubejs:warp').tag('kubejs:bear_only')
    event.create('kubejs:pandora_active').maxStackSize(1).rarity('epic').texture('kubejs:item/organs/warp/pandora_active').tag('kubejs:warp').tag('kubejs:enchant_only')
    // 传说
    event.create('kubejs:lost_paradise').maxStackSize(1).rarity('epic').texture('kubejs:item/organs/legends/lost_paradise').tag('kubejs:legends').tag('kubejs:damage_only').tag('kubejs:loot_entity_only').tag('kubejs:loot_chest_only').tag('itemborders:diamond')
    event.create('kubejs:paradise_regained').maxStackSize(1).rarity('epic').texture('kubejs:item/organs/legends/paradise_regained').tag('kubejs:legends').tag('kubejs:loot_entity_only').tag('itemborders:diamond')
    // 食物
    event.create('kubejs:hamimelon_organ').maxStackSize(1).food(food => food.hunger(6).saturation(0.8)).texture('kubejs:item/organs/food/hamimelon_organ').tag('kubejs:food').tag('kubejs:active').tag('itemborders:gold')
    event.create('kubejs:watermelon_organ').maxStackSize(1).food(food => food.hunger(4).saturation(0.8)).texture('kubejs:item/organs/food/watermelon_organ').tag('kubejs:food').tag('itemborders:iron')
    event.create('kubejs:lucky_cookie_organ').maxStackSize(1).food(food => food.hunger(2).saturation(2).alwaysEdible()).texture('kubejs:item/organs/food/lucky_cookie').tag('kubejs:food').tag('itemborders:gold')
    event.create('kubejs:golden_lucky_cookie_organ').maxStackSize(1).food(food => food.hunger(6).saturation(1.5)).texture('kubejs:item/organs/food/golden_lucky_cookie_organ').tag('kubejs:food').tag('kubejs:damage_only').tag('itemborders:gold')
    event.create('kubejs:cream_cookie_heart').maxStackSize(1).food(food => food.hunger(8).saturation(1)).texture('kubejs:item/organs/food/cream_cookie_heart').tag('kubejs:food').tag('kubejs:heart').tag('kubejs:eat_effect_only').tag('itemborders:gold')
    event.create('kubejs:mini_slime').maxStackSize(1).food(food => food.hunger(6).saturation(0.5)).texture('kubejs:item/organs/food/mini_slime').tag('kubejs:food').tag('kubejs:active').tag('itemborders:diamond')
    event.create('kubejs:mini_vampire').maxStackSize(1).food(food => food.hunger(2).saturation(2)).texture('kubejs:item/organs/food/mini_vampire').tag('kubejs:food').tag('kubejs:player_tick_only').tag('itemborders:diamond')
    event.create('kubejs:chicken_heart').maxStackSize(1).food(food => food.hunger(8).saturation(1)).texture('kubejs:item/organs/food/chicken_heart').tag('kubejs:food').tag('kubejs:heart').tag('kubejs:active_only').tag('itemborders:gold')
    event.create('kubejs:chicken_kidney').maxStackSize(1).food(food => food.hunger(6).saturation(1)).texture('kubejs:item/organs/food/chicken_kidney').tag('kubejs:food').tag('kubejs:kidney').tag('kubejs:active').tag('itemborders:gold')
    event.create('kubejs:chicken_lung').maxStackSize(1).food(food => food.hunger(6).saturation(1)).texture('kubejs:item/organs/food/chicken_lung').tag('kubejs:food').tag('kubejs:lung').tag('kubejs:active').tag('itemborders:gold')
    event.create('kubejs:chicken_strip').maxStackSize(1).food(food => food.hunger(4).saturation(1)).texture('kubejs:item/organs/food/chicken_strip').tag('kubejs:food').tag('itemborders:gold')
})