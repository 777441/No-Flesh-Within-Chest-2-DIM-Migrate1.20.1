// priority: 500
StartupEvents.registry('item', event => {
    // 糖果
    event.create('kubejs:candy_heart').maxStackSize(1).texture('kubejs:item/organs/candy/candy_heart').tag('kubejs:candy').tag('kubejs:heart')
    event.create('kubejs:candy_pancreas').maxStackSize(1).texture('kubejs:item/organs/candy/candy_pancreas').tag('kubejs:candy').tag('kubejs:pancreas')
    // 魔法使
    event.create('kubejs:plastic_heart').maxStackSize(1).texture('kubejs:item/organs/magic/plastic_heart').tag('kubejs:magic').tag('kubejs:heart')
    event.create('kubejs:magic_hippocampus').maxStackSize(1).texture('kubejs:item/organs/magic/magic_hippocampus').tag('kubejs:magic')
    event.create('kubejs:magic_muscle').maxStackSize(1).texture('kubejs:item/organs/magic/magic_muscle').tag('kubejs:magic').tag('kubejs:muscle')
    event.create('kubejs:magic_spine').maxStackSize(1).texture('kubejs:item/organs/magic/magic_spine').tag('kubejs:magic').tag('kubejs:spine')
    event.create('kubejs:magic_vision').maxStackSize(1).texture('kubejs:item/organs/magic/magic_vision').tag('kubejs:magic')
    event.create('kubejs:color_palette').maxStackSize(1).texture('kubejs:item/organs/magic/color_palette').tag('kubejs:magic').tag('kubejs:damage_only')
    event.create('kubejs:red_ink').maxStackSize(1).texture('kubejs:item/organs/magic/red_ink').tag('kubejs:magic')
    event.create('kubejs:blood_moon_wand').maxStackSize(1).texture('kubejs:item/organs/magic/blood_moon_wand').tag('kubejs:magic')
    event.create('kubejs:is_rabbit').maxStackSize(1).texture('kubejs:item/organs/magic/is_rabbit').tag('kubejs:magic')
    // 禁忌
    event.create('kubejs:the_third_eye').maxStackSize(1).texture('kubejs:item/organs/warp/the_third_eye').tag('kubejs:warp').tag('kubejs:damage_only')
    event.create('kubejs:fish_in_warp').maxStackSize(1).texture('kubejs:item/organs/warp/fish_in_warp').tag('kubejs:warp')
    event.create('kubejs:disenchantment_paper').maxStackSize(1).texture('kubejs:item/organs/warp/disenchantment_paper').tag('kubejs:warp')
    event.create('kubejs:warp_bubble').maxStackSize(1).texture('kubejs:item/organs/warp/warp_bubble').tag('kubejs:warp')
    event.create('kubejs:pandora_active').maxStackSize(1).texture('kubejs:item/organs/warp/pandora_active').tag('kubejs:warp')
    // 传说
    event.create('kubejs:lost_paradise').maxStackSize(1).texture('kubejs:item/organs/legends/lost_paradise').tag('kubejs:legends').tag('kubejs:damage_only')
    event.create('kubejs:paradise_regained').maxStackSize(1).texture('kubejs:item/organs/legends/paradise_regained').tag('kubejs:legends')
    // 食物
    event.create('kubejs:hamimelon_organ').maxStackSize(1).texture('kubejs:item/organs/food/hamimelon_organ').tag('kubejs:food')
    event.create('kubejs:watermelon_organ').maxStackSize(1).texture('kubejs:item/organs/food/watermelon_organ').tag('kubejs:food')
    event.create('kubejs:lucky_cookie_organ').maxStackSize(1).texture('kubejs:item/organs/food/lucky_cookie').tag('kubejs:food')
    event.create('kubejs:golden_lucky_cookie_organ').maxStackSize(1).texture('kubejs:item/organs/food/golden_lucky_cookie_organ').tag('kubejs:food').tag('kubejs:damage_only')
    event.create('kubejs:cream_cookie_heart').maxStackSize(1).texture('kubejs:item/organs/food/cream_cookie_heart').tag('kubejs:food').tag('kubejs:heart')
    event.create('kubejs:mini_slime').maxStackSize(1).texture('kubejs:item/organs/food/mini_slime').tag('kubejs:food')
    event.create('kubejs:mini_vampire').maxStackSize(1).texture('kubejs:item/organs/food/mini_vampire').tag('kubejs:food')
    event.create('kubejs:chicken_heart').maxStackSize(1).texture('kubejs:item/organs/food/chicken_heart').tag('kubejs:food').tag('kubejs:heart')
    event.create('kubejs:chicken_kidney').maxStackSize(1).texture('kubejs:item/organs/food/chicken_kidney').tag('kubejs:food').tag('kubejs:kidney')
    event.create('kubejs:chicken_lung').maxStackSize(1).texture('kubejs:item/organs/food/chicken_lung').tag('kubejs:food').tag('kubejs:lung')
    event.create('kubejs:chicken_strip').maxStackSize(1).texture('kubejs:item/organs/food/chicken_strip').tag('kubejs:food')
})
