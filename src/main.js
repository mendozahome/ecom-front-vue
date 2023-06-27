import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'



import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD6rjbreheNeB0UwFR8xdgO1035MlBksRw",
  authDomain: "sound-chimera-387206.firebaseapp.com",
  projectId: "sound-chimera-387206",
  storageBucket: "sound-chimera-387206.appspot.com",
  messagingSenderId: "304205958136",
  appId: "1:304205958136:web:d904f844c7c23bab72e40d",
  measurementId: "G-TPD44583EJ"
};

initializeApp(firebaseConfig);









createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/cart',
        component: ShoppingCartPage,
    },
    {
        path: '/products',
        component: ProductsPage,
    },
    {
        path: '/products/:productId',
        component: ProductDetailPage,
    },{
        path: '/',
        redirect: '/products',
    },
     {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    }],

}))
.mount('#app')
