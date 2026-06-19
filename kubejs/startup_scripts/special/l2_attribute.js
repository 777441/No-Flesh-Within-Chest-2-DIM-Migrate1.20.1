// priority: 999
// 迁移到 L2Tabs：dev.xkmc.l2library.base.tabs.contents.AttributeEntry
//   → dev.xkmc.l2tabs.init.L2Tabs.ATTRIBUTE_ENTRY (ConfigTypeEntry<AttributeDisplayConfig>)
// 旧静态 AttributeEntry.add(attr, percent, order) (3 参)
//   → 实例 AttributeDisplayConfig.add(attr, percent, order, intrinsic) (4 参，intrinsic 默认 0)
StartupEvents.postInit(event => {
    try {
        if (!$L2Tabs) throw new Error('L2Tabs class missing')
        var l2TabsConfig = $L2Tabs.ATTRIBUTE_ENTRY.getMerged()
        l2TabsConfig.add($AttributeRegistry.MAX_MANA.get(), false, 1500, 0)
        l2TabsConfig.add($AttributeRegistry.MANA_REGEN.get(), true, 1600, 0)

        l2TabsConfig.add($AttributeRegistry.SPELL_POWER.get(), true, 1700, 0)
        l2TabsConfig.add($AttributeRegistry.SPELL_RESIST.get(), true, 1800, 0)
        l2TabsConfig.add($AttributeRegistry.COOLDOWN_REDUCTION.get(), true, 1900, 0)
    } catch (e) {
        console.warn('[Migration] L2Tabs AttributeDisplayConfig 不可用，已跳过: ' + e)
    }
})
