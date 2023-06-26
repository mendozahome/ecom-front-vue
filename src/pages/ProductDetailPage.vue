<template>
  <div v-if="product">
  <div class="img-wrap">
    <img :src="product.imageUrl" />
  </div>
  <div class="product-details">
<h1> {{ product.name }}</h1>
<h3 class="price"> ${{ product.price }} </h3>
<button @click="addToCart" class="add-to-cart" v-if="user && !itemIsInCart">Add to cart</button>
<button v-if="user && itemIsInCart" class="already-in-cart">Item is already in cart</button>
<button class="sign-toadd" @click="signIn" v-if="!user">Sign in to add to cart</button>
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
props: ['user'],
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
watch: {
async user(newUserValue){
if(newUserValue){
  const cartResponse = await axios.get(`/api/users/${newUserValue.uid}/cart`);
  const cartItems = cartResponse.data;
  this.cartItems = cartItems;
}
}
},
methods: {
async addToCart(){
 await axios.post(`/api/users/${this.user.uid}/cart`,
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


if(this.user){
const cartResponse = await axios.get(`/api/users/${this.user.uid}/cart`);
const cartItems = cartResponse.data;
this.cartItems = cartItems;
}
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
  border-radius:3px;
  max-width: 10rem;
  height: 2rem;
  transition: 1s;
  cursor: pointer;
}
.add-to-cart:hover{
  background-color: rgb(20, 99, 20);
}
.sign-toadd {
  background-color: rgb(45, 158, 0);
  color:white;
  border-style: none;
  border-radius:3px;
  max-width: 10rem;
  height: 2rem;
  transition: 1s;
  cursor: pointer;
}
.sign-toadd:hover{
  background-color: rgb(20, 99, 20);
}
.already-in-cart{
  background-color: gray;
  color:white;
  border-style: none;
  border-radius:3px;
  max-width: 10rem;
  height: 2rem;
  transition: 1s;
  cursor: not-allowed;
}
</style>