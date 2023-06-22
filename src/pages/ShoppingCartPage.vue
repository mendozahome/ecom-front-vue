<template>
  <h1>shopping cart</h1>
  <ShoppingCartList :cartItems="cartItems" />
  <button class="proceed-to-checkout">Proceed To Checkout</button>
<div v-if="cartItems.length === 0">Cart is empty</div>
</template>

<script>
import axios from 'axios'
import ShoppingCartList from '@/components/ShoppingCartList.vue'

export default {
    name: "ShoppingCartPage",
    components: {
      ShoppingCartList,
    },
    data() {
      return {
        cartItems: [],
      }
    },
    async created (){
const response = await axios.get('/api/users/12345/cart')
   const cartItems = response.data;
   this.cartItems = cartItems
}
}
</script>

<style>
.product-container img{
  max-height: 10rem;
  max-width: 20rem;
}
</style>