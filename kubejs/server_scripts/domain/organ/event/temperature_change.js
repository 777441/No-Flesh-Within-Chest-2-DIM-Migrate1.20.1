// priority: 500
// 温度变化事件 — 基于 tag 分发的策略实现
// 不用 OrganStrategyModel（因为 getListenerMap 不支持自定义事件名），
// 直接用胸腔 tag 遍历匹配 + 策略对象字典

$Trait = Java.loadClass('com.momosoftworks.coldsweat.api.util.Temperature$Trait')

ColdSweatEvents.temperatureChanged(event => {
    if (event.getTrait() != $Trait.CORE) return
    const player = event.entity
    if (!player || !player.isPlayer()) return
    const chestCavity = player.getChestCavityInstance()
    if (!chestCavity) return

    // 遍历胸腔器官，根据 tag 匹配执行策略
    const inventory = chestCavity.inventory
    let onlySet = new Set()
    for (let i = 0; i < inventory.getContainerSize(); i++) {
        const item = inventory.getStackInSlot(i)
        if (!item || item.isEmpty()) continue
        const itemId = String(item.id)

        // temperature_only 标签器官（每个 ID 只执行一次唯一策略）
        if (item.hasTag('kubejs:temperature_only') && !onlySet.has(itemId)) {
            onlySet.add(itemId)
            const strategy = OrganTemperatureOnlyStrategies[itemId]
            if (strategy) strategy(event, item)
        }

        // temperature 标签器官
        if (item.hasTag('kubejs:temperature')) {
            const strategy = OrganTemperatureStrategies[itemId]
            if (strategy) strategy(event, item)
        }
    }
})

/**
 * 温度变化唯一策略字典
 * 每个 organ ID 只执行一次
 */
const OrganTemperatureOnlyStrategies = {
    'kubejs:ice_lung': function(event, organItem) {
        const player = event.entity
        const temperature = (-1) * ColdSweat.getTemperature(player, 'body')
        player.removeAttribute("irons_spellbooks:ice_spell_power", 'kubejsIceLung')
        if (temperature > 0) {
            player.modifyAttribute("irons_spellbooks:ice_spell_power", 'kubejsIceLung', 0.1 * temperature / 10, 'multiply_base')
        }
    },
    'kubejs:hydra_fiery_blood_essence': function(event, organItem) {
        const player = event.entity
        const temperature = ColdSweat.getTemperature(player, 'body')
        player.removeAttribute("irons_spellbooks:fire_spell_power", 'kubejsHydraFieryBloodEssence')
        if (temperature > 0) {
            player.modifyAttribute("irons_spellbooks:fire_spell_power", 'kubejsHydraFieryBloodEssence', 0.1 * temperature / 20, 'multiply_base')
        }
    }
}

/** 温度变化普通策略字典（预留） */
const OrganTemperatureStrategies = {}
