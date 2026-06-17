// priority: 1000
// 旧版 utils/entity_hurt_model.js 迁移
// 1.20.1: DamageSource.GENERIC 已移除，damageSource 改为 null，由调用方按需传入
function EntityHurtCustomModel() {
    this.returnDamage = 0
    this.damageSource = null
}
