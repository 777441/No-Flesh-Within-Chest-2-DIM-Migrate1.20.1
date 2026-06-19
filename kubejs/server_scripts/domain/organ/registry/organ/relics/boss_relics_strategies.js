// priority: 500
// Boss遗物器官策略实现

/**
 * love_between_lava_and_ice — 冰与火之恋
 * 根据胸腔内的蓝冰和岩浆块数量提升对应法术威力
 */
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:love_between_lava_and_ice')
        .addOnlyStrategy('chest_cavity_update', function(customData, event, organItem, organIndex, slotType) {
            const player = event.entity
            if (!player) return
            let typeMap = getPlayerChestCavityItemMap(player)
            let iceMulti = 0
            let fireMulti = 0
            if (typeMap.has('minecraft:blue_ice')) {
                iceMulti = typeMap.get('minecraft:blue_ice').length * 0.2
            }
            if (typeMap.has('minecraft:magma_block')) {
                fireMulti = typeMap.get('minecraft:magma_block').length * 0.2
            }
            // 存储到customData供法术系统使用
            customData.iceSpellPower = (customData.iceSpellPower || 0) + iceMulti
            customData.fireSpellPower = (customData.fireSpellPower || 0) + fireMulti
        })
)

/**
 * parasitic_elf — 寄生精灵
 * 受到箭矢伤害时，有概率延长负面效果持续时间
 */
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:parasitic_elf')
        .addOnlyStrategy('entity_be_hurt', function(customData, event, organItem, organIndex, slotType) {
            if (event.source.type != 'arrow') {
                return
            }
            if (Math.random() < Math.min(0.03 * event.source.player.getLuck(), 0.3)) {
                event.entity.potionEffects.active.forEach((ctx, effect) => {
                    if (effect.isHarmful()) {
                        ctx.setDuration(ctx.getDuration() + 20 * 2)
                    }
                })
            }
        })
)

/**
 * redstone_chipset — 红石芯片组
 * 根据机械器官数量提升暴击率，固定提升暴击伤害
 */
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:redstone_chipset')
        .addOnlyStrategy('chest_cavity_update', function(customData, event, organItem, organIndex, slotType) {
            const player = event.entity
            if (!player) return
            let typeMap = getPlayerChestCavityTypeMap(player)
            let critChance = 0.2
            if (typeMap.has('kubejs:machine')) {
                critChance = Math.max(typeMap.get('kubejs:machine').length * 0.02, 0.2)
            }
            customData.criticalHitChance = (customData.criticalHitChance || 0) + critChance
            customData.criticalDamageMultiplier = (customData.criticalDamageMultiplier || 1) + 0.3
        })
)

/**
 * sand_bone — 沙骨
 * 站在沙子上时获得速度II效果
 */
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:sand_bone')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            const player = event.entity
            if (player.age % 20 != 0) return  // 每秒检查一次
            if (event.level.getBlock(player.x, player.y - 1, player.z).id == 'minecraft:sand') {
                player.potionEffects.add('minecraft:speed', 20 * 3, 1, false, false)
            }
        })
)
