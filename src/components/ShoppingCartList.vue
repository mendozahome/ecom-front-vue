<template>
  <div v-if="cartItems.length > 0">
    <div v-for="product in  cartItems" class="product-container" :key="product.id"> 
  <img class="product-image" :src="product.imageUrl" />
  <div class="details-wrap">
    <h3>{{ product.name }}</h3>
    <p> {{ product.price }}</p>
  </div>
  <button class="remove-button">Remove from cart</button>
  </div>
  
  </div>

</template>

<script>
export default {
name: "ShoppingCartList",
props: ['cartItems']
}
</script>

<style>

</style>