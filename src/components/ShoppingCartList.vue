<template>
  <div v-if="cartItems.length > 0">
    <div v-for="product in cartItems" class="product-container" :key="product.id"> 
  <img class="product-image" :src="product.imageUrl" />
  <div class="details-wrap">
    <h3>{{ product.name }}</h3>
    <p> ${{ product.price }}</p>
  </div>
  <button @click="$emit('remove-from-cart', product.id)" class="remove-button">Remove from cart</button>
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
.remove-button{
  background-color: blue;
  font-weight: bold;
  color:white;
  border-style: none;
  border-radius:2px;
  max-width: 10rem;
  height: 3rem;
  margin-bottom: 10px;
  transition:2s;
}
.remove-button:hover{
  background-color: darkblue;
}
</style>