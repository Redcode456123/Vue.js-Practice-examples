import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import createPersistedState from 'vuex-persistedstate';
import deepdash from "deepdash";
import findDeep from "lodash-es";
import {UrlResolver} from "/src/main.js";

Vue.use(Vuex);


const store = new Vuex.Store({


    state: { 		//define your objects,variables you want to deal with.
        count: 0,
        products: [],
        cart: [],
        onSale: [],
        newComing: [],
        productSelected: ""
    },

    plugins: [
        createPersistedState({
            paths: ['cart']
        })
    ],
    //***********************************************************
    //***********************************************************


    mutations: {
        INCREMENT(state) {
            state.count++;
        },
        // increaseCartQuantity(state,productsSelected){
        //     let findProductInProducts = state.products.find(item => item.id === parseInt(productsSelected.id));
        //     let productInCartIndex = state.cart.findIndex(item => //item means item in the cart
        //         item.id === productsSelected.id
        //     );//if same product exists  in the cart ->inde
        // },
        deleteProductFromCart(state, {index}) {
            state.cart.splice(index, 1);
        },
        setProducts(state, products) {
            state.products = products
        },
        setOnSale(state, onSale) {
            state.onSale = onSale
        },

        setNewComing(state, newComing) {
            state.newComing = newComing
        },

        resetCart(state, value) {
            state.cart = []
        },

        addToCart(state, productSelected) {

            this.state.cart.push({
                id: productSelected.id,
                model: productSelected.model,
                image: productSelected.image,
                price: productSelected.price,
                quantity: 1

            })
        },

        RemoveFromCart(state, productsSelected) { //mutations

            let findProductInProducts = state.products.find(item => item.id === parseInt(productsSelected.id));
            let productInCartIndex = state.cart.findIndex(item => //item means item in the cart
                item.id === productsSelected.id
            );//if same product exists  in the cart ->index of that item in the cart, else -1

            function productRequestedAvailableQuantityInDB() {
                let productRequestedAvailableQuantity = state.products.find(item => {
                        return item.id === parseInt(productsSelected.id) //condition
                    }//item means item in the list
                );
                return productRequestedAvailableQuantity.quantity;
            }

            if (productInCartIndex !== -1) { //  if  found in cart
                if ((state.cart[productInCartIndex].quantity) < 1) { //quantitySelected is created in the condition below.
                    // alert("not allowed");
                    return
                }
                this.state.cart[productInCartIndex].quantity--;
                // state.cart[productInCartIndex].quantitySelected--;
                // state.count++;

                return;
            } // if not found in cart
            // productsSelected.model = findProductInProducts.model;
            // productsSelected.image = findProductInProducts.image;
            // productsSelected.price = findProductInProducts.price;
            // productsSelected.quantity = 1;//add quantitySelected attribute
            // state.cart.push(productsSelected);
        },

        incrementItemQuantity(state, productInCartIndex) {
            this.state.cart[productInCartIndex].quantity = parseInt(this.state.cart[productInCartIndex].quantity) + 1;
        }
    },
    //**************************************************************
    //**************************************************************
    actions: {

        addProductToCart(context, product) {
            let productsSelected = product.itemRequested;
            let productInCartIndex = context.state.cart.findIndex(item => //item means item in the cart
                parseInt(item.id) === parseInt(productsSelected.id)
            );//if same product exists  in the cart ->index of that item in the cart, else -1
            if (productInCartIndex !== -1) { //  if  found in cart
                if ((context.state.cart[productInCartIndex].quantity) > (context.getters['getQuantityAvailableInDbById'](parseInt(productsSelected.id)) - 1)) {
                    return
                } else {
                    context.commit('incrementItemQuantity', productInCartIndex)
                }
            } else {
                context.commit('addToCart', (productsSelected))
            }
        },
        //***************************************************************
        async fetchProducts({commit, state}) {

            let logs=UrlResolver.resolve('/src/assets/phones.json', '');
          /*  await axios.get('/src/assets/phones.json')*/
            await axios.get(logs)
                .then(response => {
                    commit('setProducts', response.data) //      setProducts(state, products) {
                    // alert(response.data)
                })

            let allM = []
            state.products.map((d) => {
                for (let i = 0; i < Object.keys(d).length; i++) {
                    if (d["onSale"])
                        allM.push(d["onSale"])
                }
            })
            commit('setOnSale', allM[0])
            allM = []
            state.products.map((d) => {
                for (let i = 0; i < Object.keys(d).length; i++) {
                    // alert(d)
                    if (d["newComing"])
                        allM.push(d["newComing"])
                }
            })
            commit('setNewComing', allM[0])
        },

        //***************************************************************


    },
    getters: {
        getOnSale: state => {
            return state.onSale;
            //  let allM = []
            //
            // state.products.map((d) => {
            //          for (let i = 0; i < Object.keys(d).length; i++) {
            //              if (d["onSale"])
            //                  allM.push(d["onSale"])
            //          }
            //  })
            //  return allM
        },

        getQuantityAvailableInDbById: (state, getters) => (id) => {
            let item = getters.getProductRequestedById(id);
            return parseInt(item.quantity);
        },


        getProductRequestedById: (state, getters) => (id) => {

            // require('deepdash');
            const _ = deepdash(findDeep);

            let foundParent = null;
            let breakLoop = false;
            let clean = _.findDeep(getters.getAllProducts, (v, k, parent) => {
                if (breakLoop || (k === "id" && v === parseInt(id))) { // change parseInt(this.$route.query.id) to the value of id.
                    breakLoop = false;
                    foundParent = parent;
                }

            }, {checkCircular: false, skipChildren: true, cloneDeep: false});
            breakLoop = false;

            return foundParent
        },
        getMyCart: state => {
            return state.cart;
        },
        getAllProducts: state => {
            // alert("in store "+state.products)
            return state.products;

        },
        getTotalToPay: state => {
            if (state.cart[0] === null) {
                return 0;
            } else {
                let total = 0;
                state.cart.forEach((item, i) => {
                    total += (item.quantity) * (item.price);
                })
                return total;
            }
        },
        getTotalItemsInCart: state => {
            let total = 0;
            if (state.cart[0] === null) {

            } else {
                state.cart.forEach((item, i) => {
                        total += item.quantity;
                    }
                )
                //https://stackoverflow.com/questions/64535385/how-to-get-total-of-cart-items-price-and-multiply-with-quantity-in-vue-js
            }
            return total;
        },


    }
});

Vue.mixin({
    computed: {},
    mounted: function () {
        // this.$store.commit('setOnSale1')
    }
})

export default store;