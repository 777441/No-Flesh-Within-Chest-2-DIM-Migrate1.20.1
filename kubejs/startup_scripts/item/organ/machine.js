// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:furnace_core').maxStackSize(1).texture('kubejs:item/organs/machine/furnace_core').maxDamage(100).tag('kubejs:heart').tag('kubejs:machine')
    event.create('kubejs:burning_heart').maxStackSize(1).texture('kubejs:item/organs/machine/burning_heart').maxDamage(100).tag('kubejs:heart').tag('kubejs:machine')
    event.create('kubejs:revolution_cable').maxStackSize(1).texture('kubejs:item/organs/machine/revolution_cable').tag('kubejs:revolution').tag('kubejs:machine').tag('kubejs:spine')
    event.create('kubejs:revolution_relay').maxStackSize(1).texture('kubejs:item/organs/machine/revolution_relay').tag('kubejs:revolution').tag('kubejs:machine')
    event.create('kubejs:revolution_delay').maxStackSize(1).texture('kubejs:item/organs/machine/revolution_delay').tag('kubejs:revolution').tag('kubejs:machine')
    event.create('kubejs:revolution_bell').maxStackSize(1).texture('kubejs:item/organs/machine/revolution_bell').tag('kubejs:revolution').tag('kubejs:machine')
    event.create('kubejs:blaze_pressurizer').maxStackSize(1).texture('kubejs:item/organs/machine/blaze_pressurizer').tag('kubejs:machine')

    event.create('kubejs:telescopic_arm').maxStackSize(1).texture('kubejs:item/organs/machine/telescopic_arm').tag('kubejs:machine')
    event.create('kubejs:telescopic_attack_arm').maxStackSize(1).texture('kubejs:item/organs/machine/telescopic_attack_arm').tag('kubejs:machine')

    event.create('kubejs:lava_life_cycle_system').maxStackSize(1).texture('kubejs:item/organs/machine/lava_life_cycle_system').tag('kubejs:machine')

    event.create('kubejs:revolution_steam_engine').maxStackSize(1).texture('kubejs:item/organs/machine/revolution_steam_engine').tag('kubejs:revolution').tag('kubejs:resource').tag('kubejs:machine').tag('itemborders:diamond')

    event.create('kubejs:prowler_rotating_shaft').maxStackSize(1).texture('kubejs:item/organs/machine/prowler_rotating_shaft').tag('kubejs:machine')

    event.create('kubejs:watcher_probe').maxStackSize(1).texture('kubejs:item/organs/machine/watcher_probe').tag('kubejs:machine')

    event.create('kubejs:fiery_core').maxStackSize(1).texture('kubejs:item/organs/machine/fiery_core').fireResistant().tag('kubejs:machine').tag('kubejs:heart')

    event.create('kubejs:thermometer').maxStackSize(1).texture('kubejs:item/organs/machine/thermometer').tag('kubejs:machine').tag('kubejs:bone')

    event.create('kubejs:energy_bottle_red').maxStackSize(1).texture('kubejs:item/organs/machine/energy_bottle_red').maxDamage(100).tag('kubejs:muscle').tag('kubejs:machine')

    event.create('kubejs:small_acid_tank').maxStackSize(1).texture('kubejs:item/organs/machine/small_acid_tank').maxDamage(600).tag('kubejs:machine')

    event.create('kubejs:iron_repair_device').maxStackSize(1).texture('kubejs:item/organs/machine/iron_repair_device').tag('kubejs:machine')

    event.create('kubejs:cyborgization_device').maxStackSize(1).texture('kubejs:item/organs/machine/cyborgization_device').tag('kubejs:machine').maxDamage(30)

    event.create('kubejs:programmable_automatic_core').texture('kubejs:item/organs/machine/programmable_automatic_core').maxStackSize(1).tag('kubejs:machine')

    event.create('kubejs:inner_furnace').maxStackSize(1).tag('kubejs:machine').tag('kubejs:basic').texture('kubejs:item/organs/machine/inner_furnace').tag('kubejs:heart')
    event.create('kubejs:golem_cable').maxStackSize(1).tag('kubejs:machine').tag('kubejs:basic').texture('kubejs:item/organs/machine/golem_cable').tag('kubejs:spine')
    event.create('kubejs:golem_plating').maxStackSize(1).tag('kubejs:machine').tag('kubejs:basic').texture('kubejs:item/organs/machine/golem_plating').tag('kubejs:bone')
    event.create('kubejs:piston_muscle').maxStackSize(1).tag('kubejs:machine').tag('kubejs:basic').texture('kubejs:item/organs/machine/piston_muscle').tag('kubejs:muscle')
    // 缺失的机械器官
    event.create('kubejs:revolution_gear').maxStackSize(1).texture('kubejs:item/organs/machine/revolution_gear').tag('kubejs:revolution').tag('kubejs:machine')
    event.create('kubejs:compressed_oxygen_implant').maxStackSize(1).texture('kubejs:item/organs/machine/compressed_oxygen_implant').tag('kubejs:machine').tag('kubejs:lung')
    event.create('kubejs:lowlight_vision').maxStackSize(1).texture('kubejs:item/organs/machine/lowlight_vision').tag('kubejs:machine').tag('kubejs:resource')
    event.create('kubejs:jet_propeller').maxStackSize(1).texture('kubejs:item/organs/machine/jet_propeller').tag('kubejs:machine').tag('kubejs:resource')
    event.create('kubejs:aegis').maxStackSize(1).texture('kubejs:item/organs/machine/aegis').tag('kubejs:machine')
    event.create('kubejs:mace').maxStackSize(1).texture('kubejs:item/organs/machine/mace').tag('kubejs:machine')
    event.create('kubejs:platelet_dispatcher').maxStackSize(1).texture('kubejs:item/organs/machine/platelet_dispatcher').tag('kubejs:machine').tag('kubejs:spleen')
    event.create('kubejs:machine_clockwork').maxStackSize(1).texture('kubejs:item/organs/machine/machine_clockwork').tag('kubejs:machine').tag('kubejs:resource')
    event.create('kubejs:tamagotchi').maxStackSize(1).texture('kubejs:item/organs/machine/tamagotchi').tag('kubejs:machine')
    event.create('kubejs:energy_bottle_max').maxStackSize(1).texture('kubejs:item/organs/rose_quartz/energy_bottle_max').maxDamage(100).tag('kubejs:machine').tag('kubejs:resource')
    event.create('kubejs:telescopic_tool_arm').maxStackSize(1).texture('kubejs:item/organs/machine/telescopic_arm').tag('kubejs:machine')
    event.create('kubejs:lamellar_armor_piece').maxStackSize(1).texture('kubejs:item/organs/machine/lamellar_armor_piece').tag('kubejs:machine')
    event.create('kubejs:chain_armor_piece').maxStackSize(1).texture('kubejs:item/organs/machine/chain_armor_piece').tag('kubejs:machine')
})