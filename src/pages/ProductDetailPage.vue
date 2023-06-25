<template>
  <div v-if="product">
  <div class="img-wrap">
    <img :src="product.imageUrl" />
  </div>
  <div class="product-details">
<h1> {{ product.name }}</h1>
<h3 class="price"> ${{ product.price }} </h3>
<button @click="addToCart" class="add-to-cart" v-if="!itemIsInCart">Add to cart</button>
<button v-if="itemIsInCart">Item is already in cart</button>
<button @click="signIn">Sign in to add to cart</button>
</div>
</div>
<div v-if="!product">
<NotFoundPage />
</div>
</template>

<script>
import NotFoundPage from './NotFoundPage.vue';
import axios from 'axios'
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'

export default {
name: "ProductDetailPage",
components: {
NotFoundPage
},
data(){
  return{
    product: {},
    cartItems: [],
  }
},
computed: {
itemIsInCart(){
  return this.cartItems.some(item => item.id === this.$route.params.productId);
}
},

methods: {
async addToCart(){
 await axios.post('/api/users/12345/cart',
 { id: this.$route.params.productId}
 )
 alert('Successfully added item to cart!');
},
async signIn(){
const email = prompt('Please enter your email to sign in');
const auth = getAuth();
const actionCodeSettings = {
url: `http://localhost:8080/products/${this.$route.params.productId}`,
handleCodeInApp: true,
}
await sendSignInLinkToEmail(auth,email,actionCodeSettings)
alert('A login email was sent');
window.localStorage.setItem('emailForSignIn', email);
}

},
async created(){
const auth = getAuth();
if (isSignInWithEmailLink(auth, window.location.href)) {
  const email = window.localStorage.getItem('emailForSignIn')
  await signInWithEmailLink(auth, email, window.location.href)
  alert('successfully signed in!');
  window.localStorage.removeItem('emailForSignIn')
}

const response = await axios.get(`/api/products/${this.$route.params.productId}`);
const product = response.data;
this.product = product;

const cartResponse = await axios.get(`/api/users/12345/cart`);
const cartItems = cartResponse.data;
this.cartItems = cartItems;
}


}

</script>

<style>
.img-wrap{
  display: flex;
  justify-content: center;
 
}
.img-wrap img{
  max-height: 50vh;
  max-width: 50vw;
}
.product-details{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.add-to-cart{
  background-color: rgb(45, 158, 0);
  color:white;
  border-style: none;
  border-radius:2%;
  max-width: 10rem;
  height: 2rem;
  transition: 1s;
  cursor: pointer;
}
.add-to-cart:hover{
  background-color: rgb(20, 99, 20);
}
</style>