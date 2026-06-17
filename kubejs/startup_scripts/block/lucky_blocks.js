// priority: 100
StartupEvents.registry('minecraft:block', event => {
    event.create('lucky_block', 'basic')
        .hardness(1.5)
        .noDrops()

    event.create('organ_lucky_block', 'basic')
        .hardness(1.5)
        .noDrops()

    event.create('infinity_lucky_block', 'basic')
        .hardness(2)
        .noDrops()

    try {
        event.create('kubejs:organ_recycler', 'custommachinery')
            .machine('kubejs:organ_recycler')
    } catch (e) {
        console.warn('[Migration] organ_recycler 加载失败，已跳过: ' + e)
    }
})
