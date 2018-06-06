/**
 * Created by xiezg on 2018/5/29
 */

import ajax from '~common/ajax'
import { src, mapMutations, mapActions, platform, tipsTime } from '~common/util'

import { Message } from 'element-ui'

const state = {}

const mutationsInfo = mapMutations({
}, 'home')

const actionsInfo = mapActions({
}, 'home')

export const mTypes = mutationsInfo.mTypes
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
const actions = actionsInfo.actions
export default { state, mutations, actions }