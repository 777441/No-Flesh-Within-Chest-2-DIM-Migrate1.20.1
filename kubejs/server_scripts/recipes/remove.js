// priority: 500
ServerEvents.recipes(event => {
    event.remove({ output: 'kaleidoscope_cookery:transmutation_lunch_bag' })
    event.remove({ output: 'sophisticatedbackpacks:inception_upgrade' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_omega_tier' })
    event.remove({ output: 'cataclysm:meat_shredder' })
    
    event.remove({ mod: 'infinity' })
    event.remove({ mod: 'gateways' })
    event.remove({ mod: 'compactcrafting' })
    event.remove({ id: 'wormhole_artifact:wormhole_remote' })
    event.remove({ id: 'cataclysm:belt_of_beginner' })
    event.remove({ id: 'create_central_kitchen:sequenced_assembly/vegan_hamburger' })

    // 移除空 result 的 stonecutting 配方（mod 兼容问题）
    event.remove({ id: 'cataclysm:stonecutting/azure_seastone_brick_stair_from_stonecutting' })
    event.remove({ id: 'goety:end/big_end_stone_bricks_stonecutting' })
})