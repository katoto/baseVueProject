import Vue from 'vue'
import Router from 'vue-router'

// 勿删
import language from '../plugins/language'

Vue.use(Router)

/* cs_1105 */
/* cs_1105 首页 */
const lucky11 = () => import('~/pages/cs_1105/lucky')
/* cs_1105 开奖页 */
const csDrawNum = () => import('~/pages/cs_1105/drawNumber')

/* 协议 */
const csProtocolPolicy = () => import('~/pages/cs_protocol/policy')
const csProtocolTerms = () => import('~/pages/cs_protocol/terms')

/* 个人中心 */
const account = () => import('~/pages/cs_account/account')
const General = () => import('~/pages/cs_account/General')
const Deposit = () => import('~/pages/cs_account/Deposit')
const MyBets = () => import('~/pages/cs_account/MyBets')
const MyTransactions = () => import('~/pages/cs_account/MyTransactions')
const Withdraw = () => import('~/pages/cs_account/Withdraw')

/* 老虎机 */
const slot = () => import('~/pages/cs_tiger/slotMachine')

/* 一元夺币 */
const luckycoin = () => import('~/pages/cs_luckycoin/lucky-coin')

const luckcoinIndex = () => import('~/pages/cs_luckycoin/index')

const luckcoinMoreBids = () => import('~/pages/cs_luckycoin/more-bids')

const luckycoinDrawHistory = () => import('~/pages/cs_luckycoin/draw-history')

const Home = () => import('~/pages/cs_home/home')

/*品牌首页 */
const home = () => import('~/pages/cs_home/home')
// 404  history
const page404 = () => import('~/pages/404.vue')

let routesArr = [
    {
        path: '/lucky11',
        name: 'lucky11',
        component: lucky11
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/slot',
        name: 'slot',
        component: slot
    },
    {
        path: '/luckycoin$',
        name: _('Luck Coin'),
        component: luckycoin
    },
    {
        path: '/luckycoin',
        name: _('Luck Coin'),
        component: luckycoin,
        children: [
            {
                path: 'drawHistory',
                meta: {
                    history: true
                },
                name: _('Draw History'),
                component: luckcoinMoreBids
            },
            {
                path: 'moreBids',
                name: _('More Bids'),
                component: luckcoinMoreBids
            },
            {
                path: '',
                name: _('Home'),
                component: luckcoinIndex
            }
        ]
    },
    {
        path: '/terms',
        name: _('terms'),
        component: csProtocolTerms
    },
    {
        path: '/policy',
        name: _('policy'),
        component: csProtocolPolicy
    },
    {
        path: '/drawNumber',
        name: _('Draw Number'),
        component: csDrawNum
    },
    {
        path: '/404',
        component: page404,
        hidden: true
    },
    {
        path: '/account',
        component: account,
        children: [
            {
                path: 'general',
                name: _('General'),
                component: General
            },
            {
                path: 'deposit',
                name: _('Deposit'),
                component: Deposit
            },
            {
                path: 'myBets',
                name: _('MyBets'),
                component: MyBets
            },
            {
                path: 'myTransactions',
                name: _('MyTransactions'),
                component: MyTransactions
            },
            {
                path: 'withdraw',
                name: _('Withdraw'),
                component: Withdraw
            },
            {
                path: '/',
                redirect: '/account/general'
            }
        ]
    },
    {
        path: '/*',
        name: _('Home'),
        component: Home
    }
]

//     linkActiveClass: 'on',
export default new Router({
    mode: 'history',
    routes: routesArr
})

if (location.search) {
    let queryObj = {}
    location.search.replace('?', '').split('&').forEach(item => {
        if (~item.indexOf('=')) {
            item = item.split('=')
            queryObj[item[0]] = item[1]
        }
    })
    if (queryObj.sign) {
        if (queryObj.inviter) {
            // history.replaceState({}, '', `${location.href.split(location.pathname)[0]}${location.pathname}/?inviter=${queryObj.inviter}&sign=${queryObj.sign}`)
            history.replaceState({}, '', `${location.origin}/?inviter=${queryObj.inviter}&sign=${queryObj.sign}`)
        }
        if (queryObj.from) {
            if (queryObj.from === 'resetPassword') {
                history.replaceState({}, '', `${location.origin}/?from=${queryObj.from}&sign=${queryObj.sign}&email=${queryObj.email}`)
            } else {
                history.replaceState({}, '', `${location.origin}${location.pathname}/?from=${queryObj.from}&sign=${queryObj.sign}`)
            }
        }
    }
}
