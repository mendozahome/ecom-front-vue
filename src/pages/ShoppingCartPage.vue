<template>
  <h1>shopping cart</h1>
  <ShoppingCartList :cartItems="cartItems" />
  <button class="proceed-to-checkout">Proceed To Checkout</button>
<div v-if="cartItems.length === 0">Cart is empty</div>
</template>

<script>
import { cartItems } from '@/temp-data';
import ShoppingCartList from '@/components/ShoppingCartList.vue'

export default {
    name: "ShoppingCartPage",
    components: {
      ShoppingCartList,
    },
    data() {
      return {
        cartItems,
      }
    }
}
</script>

<style>
.product-container img{
  max-height: 10rem;
  max-width: 20rem;
}
</style>