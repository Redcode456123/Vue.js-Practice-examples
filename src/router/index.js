import Vue from 'vue'
import Router from 'vue-router'

import store from '../store/index.js';


Vue.use(Router)
const originalPush = Router.prototype.push
const originalReplace = Router.prototype.replace
// push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
// replace
Router.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '/home',
            component: () => import('../views/Home.vue'),
            // component: r => require.ensure([], () => r(require('../views/Home')), 'demo')
            // component:import('../views/Home.vue'),
        },
        {
            path: '/Products',
            name: 'products',
            // component: () => import('../views/ProductsCopy.vue'),
            component: () => import('../views/Products.vue'),
        },
        {
            path: "/CartDetails",
            name: "Cart",
            params: true,
            component: () =>
                import("../views/Cart.vue")
            //Lazy loaded, only activate when visited, or on demand ProductItem.vue.
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import("../views/About")
            //Lazy loaded, only activate when visited, or on demand.
        },
        {
            path: "/showDetail", //cartDetail
            name: "showDetail",
            params: true,
            // component: r => require.ensure([], () => r(require('../views/ProductItem')), 'demo')
            component: () =>
                import("../views/ProductItem")
            //Lazy loaded, only activate when visited, or on demand.
        },
        {
            path: "/success",
            name: "success",
            component: () =>
                import("../views/Success")
            //Lazy loaded, only activate when visited, or on demand.
        },
        {
            path: "/failure",
            name: "failure",
            component: () =>
                import("../views/Failure")
            //Lazy loaded, only activate when visited, or on demand.
        },
//     import("../views/Info"),
        {
            path: "/info",
            name: "info",
            params: true,
            component: () =>
                // import("../views/Info"),
                // import("../components/PaymentOptions/emailTemplate.vue"),//checkout
                import("../views/Info"),//checkout
                // import("../components/PaymentOptions/checkoutVisaAlone"),//checkout
            // import("../views/vuelidateMe"),//checkout
            beforeEnter(to, from, next) {
                if (to.path === '/info') {
                    if (store.state.cart.length > 0) {
                        next('/Info') // name of the view in file :Info.vue
                    } else {
                        next('/')
                    }
                } else {
                    next()
                }
            }
        },

        {
            path: "/order-complete",
            name: "order-complete",
            params: "true",
            component: () =>
                import("../components/PaymentOptions/Complete.vue")
            // component: r => require.ensure([], () => r(require('../components/PaymentOptions/Complete.vue')), 'demo')
            //Lazy loaded, only activate when visited, or on demand.
        },
    ],

    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
})