// priority: 100
StartupEvents.registry('sound_event', event => {
    event.create("kubejs:faded_song")
    event.create("kubejs:beak_metal")
    event.create("kubejs:beak_mangrove_roots")
})
  


// faded_disc 已由 item/music_disc_register.js 注册；这里只保留旧版迁移来的音效事件。