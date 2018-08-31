// 活动相关
import ajax from '~common/ajax'
import { mapMutations, mapActions } from '~common/util'

const state = {
    firstCharge: {
        activity_status: '-1'
    },
    sockMsg: null,
    isShowBonus: false
}

const mutationsInfo = mapMutations({
    firstCharge (state, data) {
        state.firstCharge = data
    },
    sockMsg (state, data) {
        state.sockMsg = data
    },
    isShowBonus (state, data) {
        state.isShowBonus = data
    }
}, 'cs_activity')

const actionsInfo = mapActions({
    /* 首充充值 */
    async getChargeState ({ state, commit, dispatch }) {
        try {
            let chargeData = await ajax.get('/activity/firstrecharge')
            if (chargeData.status === '100') {
                if (chargeData.data && chargeData.data.activity_status === '2') {
                    if (localStorage.getItem('firstCharge') !== '1') {
                        commit(mTypes.isShowBonus, true)
                        localStorage.setItem('firstCharge', '1')
                    }
                }
                commit(mTypes.firstCharge, chargeData.data)
                return chargeData.data
            }
        } catch (e) {
            console.error('getChargeState error at cs_activity.js ')
        }
    },
    /* 首充充值 */
    async getChance ({ state, commit, dispatch }) {
        try {
            let chargeData = await ajax.get('/activity/firstrecharge_get')
            return chargeData
        } catch (e) {
            console.error('getChance error at cs_activity.js ')
        }
    }
}, 'cs_activity')

export const mTypes = mutationsInfo.mTypes
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
const actions = actionsInfo.actions
export default {state, mutations, actions}
