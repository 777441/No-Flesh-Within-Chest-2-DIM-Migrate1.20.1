// priority: 1000
const luckyCookieSentence = [
    'kubejs.status_msg.lucky_cookie.1',
    'kubejs.status_msg.lucky_cookie.2',
    'kubejs.status_msg.lucky_cookie.3',
    'kubejs.status_msg.lucky_cookie.4',
    'kubejs.status_msg.lucky_cookie.5',
    'kubejs.status_msg.lucky_cookie.6',
    'kubejs.status_msg.lucky_cookie.7',
    'kubejs.status_msg.lucky_cookie.8',
    'kubejs.status_msg.lucky_cookie.9',
    'kubejs.status_msg.lucky_cookie.10',
    'kubejs.status_msg.lucky_cookie.11',
    'kubejs.status_msg.lucky_cookie.12',
    'kubejs.status_msg.lucky_cookie.13',
    'kubejs.status_msg.lucky_cookie.14',
    'kubejs.status_msg.lucky_cookie.15',
    'kubejs.status_msg.lucky_cookie.16',
    'kubejs.status_msg.lucky_cookie.17',
    'kubejs.status_msg.lucky_cookie.18',
    'kubejs.status_msg.lucky_cookie.19',
    'kubejs.status_msg.lucky_cookie.20',
    'kubejs.status_msg.lucky_cookie.21',
    'kubejs.status_msg.lucky_cookie.22',
    'kubejs.status_msg.lucky_cookie.23',
    'kubejs.status_msg.lucky_cookie.24',
    'kubejs.status_msg.lucky_cookie.25',
    'kubejs.status_msg.lucky_cookie.26',

]

const organActive = 'organActive'

function randomGet(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// 迁移到 TetraJS 新 API：ItemEffect.get(key) + StatBarHelper.effectLevel
// 旧版 TetraEffect.createItemEffect / TetraStatGetter.createStatGetterEffectLevel 已删除
// 使用 var 允许 Rhino 重复声明，避免脚本重载时的 redeclaration 报错
try {
    var $ItemEffectClass = Java.loadClass('se.mickelus.tetra.effect.ItemEffect')
    var effFunctionalization = $ItemEffectClass.get('functionalization')
    var effFunctionalizationGetter = StatBarHelper.effectLevel(effFunctionalization, 1.0)

    var effSilicosis = $ItemEffectClass.get('silicosis')
    var effSilicosisGetter = StatBarHelper.effectLevel(effSilicosis, 1.0)

    global.TetraEffect = {
        'kubejs:functionalization': effFunctionalization,
        'kubejs:silicosis': effSilicosis
    }
    global.TetraEffectGetters = {
        functionalization: effFunctionalizationGetter,
        silicosis: effSilicosisGetter
    }
} catch (e) {
    console.warn('[Migration] TetraEffect API 不可用，已跳过: ' + e)
}
