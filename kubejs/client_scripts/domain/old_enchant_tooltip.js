// priority: 500
// 旧版 client_scripts/enchant.js 迁移 — 附魔台提示
MoreJSEvents.enchantmentTableTooltip((event) => {
    event.lines.removeIf(x => true)
    if (event.clue.level > 9) {
        event.lines.add([Text.red(Text.translatable("kubejs.tooltips.enchant.1")), Text.gray('. . .!')])
    } else if (event.clue.level > 4) {
        event.lines.add([Text.gold(Text.translatable("kubejs.tooltips.enchant.2")), Text.gray('. . .?!')])
    } else {
        event.lines.add([Text.gray(Text.translate(event.clue.enchantment.descriptionId)), Text.gray('. . .?')])
    }
})
