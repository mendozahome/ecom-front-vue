<template>
  <h1>shopping cart</h1>
  <ShoppingCartList @remove-from-cart="removeFromCart($event)" :cartItems="cartItems" />
  <button class="proceed-to-checkout">Proceed To Checkout</button>
  <div v-if="cartItems.length === 0">Cart is empty</div>
</template>

<script>
import axios from 'axios'
import ShoppingCartList from '@/components/ShoppingCartList.vue'

export default {
    name: "ShoppingCartPage",
    props:['user'],
    components: {
      ShoppingCartList,
    },
    data() {
      return {
        cartItems: [],
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
async removeFromCart(productId){
const response = await axios.delete(`/api/users/${this.user.uid}/cart/${productId}`)
const updatedCart = response.data;
this.cartItems = updatedCart;
},
    },
    async created (){
      if(this.user){
        const response = await axios.get(`/api/users/${this.user.uid}/cart`)
   const cartItems = response.data;
   this.cartItems = cartItems;
      }
}
}
</script>

<style>
.product-container img{
  max-height: 10rem;
  max-width: 20rem;
}
.proceed-to-checkout{
  background-color: red;
  color:white;
  border-style: none;
  border-radius:2px;
  max-width: 10rem;
  height: 2rem;
  transition: 1s;
  cursor: pointer
}
.proceed-to-checkout:hover{
  background-color: rgb(90, 0, 0);
}
</style>