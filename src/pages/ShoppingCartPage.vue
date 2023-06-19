<template>
  <h1>shopping cart</h1>
  <div v-if="cartItems.length > 0">
    <div v-for="product in  cartItems" class="product-container" :key="product.id"> 
  <img class="product-image" :src="product.image" />
  <div class="details-wrap">
    <h3>{{ product.name }}</h3>
    <p> {{ product.price }}</p>
  </div>
  <button class="remove-button">Remove from cart</button>
  </div>
  <button class="proceed-to-checkout">Proceed To Checkout</button>
  </div>
<div v-if="cartItems.length === 0">Cart is empty</div>
</template>

<script>
import { cartItems } from '@/temp-data';


export default {
    name: "ShoppingCartPage",
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