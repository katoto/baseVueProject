/**
 * Created by xiezg on 2018/5/29
 */

import ajax from '~common/ajax'
import {mapMutations, mapActions, formateBalance, tipsTime} from '~common/util'
import {Message} from 'element-ui'

const state = {

    recentList: [], // 最近中奖列表
    prizes_pool: null, // 奖池数
    last_prizes: null // 上次中奖

}

const mutationsInfo = mapMutations({
    last_prizes (state, data) {
        state.last_prizes = data
    },
    prizes_pool (state, data) {
        state.prizes_pool = data
    },
    recentList (state, data) {
        state.recentList = data
    },
    setjackPotMsg (state, data) {
        state.jackPotMsg = data
    }

}, 'cs_tiger')

const actionsInfo = mapActions({
    /* 老虎机 socket 推送 */
    formateTiger ({state, commit, dispatch}, data) {
        if (data) {
            // console.log(data)
            // console.log('==== formateTiger =====')
            if (data.prizes_pool !== undefined) {
                commit(mTypes.prizes_pool, data.prizes_pool)
            }
            if (data.last_prizes !== undefined) {
                commit(mTypes.last_prizes, data.last_prizes)
            }
            if (data.recentList !== undefined) {
                commit(mTypes.recentList, data.recentList)
            }
        }
    },

    /* 添加中奖播报 动态插入 */
    addRecentList ({state, commit, dispatch}, data) {
        if (data && state.recentList) {
            // 对象
            state.recentList.unshift(data)
        }
        // let currTigerMsg = {
        //     ...state.recentList
        // }
        commit(mTypes.recentList, state.recentList)
    },

    /* 老虎机首页数据 */
    async slotsHome ({commit, dispatch}) {
        try {
            let InfoData = await ajax.get(`/slots/home`)
            // let InfoData = await ajax.get(`http://10.0.0.130:7780/server/index.php?g=Web&c=Mock&o=mock&projectID=2&uri=/slots/home`)
            if (InfoData && InfoData.data) {
                let data = InfoData.data
                data.prizes_pool = 123
                data.last_prizes = 435
                data.free_times = '0'

                if (data.prizes_pool !== undefined) {
                    commit(mTypes.prizes_pool, data.prizes_pool)
                }
                if (data.last_prizes !== undefined) {
                    commit(mTypes.last_prizes, data.last_prizes)
                }
            }
            return InfoData.data
        } catch (e) {
            this.$error(e.message)
        }
    },

    /* 投注下单  2001  */
    async placeOrder ({commit, dispatch}, transferOrderStr) {
        try {
            let InfoData = await ajax.post(`/place/order`, {
                codestr: transferOrderStr,
                cointype: 2001
            })
            return InfoData
        } catch (e) {
            this.$error(e.message)
        }
    }

}, 'cs_tiger')

export const mTypes = mutationsInfo.mTypes
export const mutationTypes = mutationsInfo.mTypes
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const actionTypes = actionsInfo.aTypes
const actions = actionsInfo.actions
export default {state, mutations, actions}
