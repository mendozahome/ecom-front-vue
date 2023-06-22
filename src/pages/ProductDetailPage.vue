<template>
  <div v-if="product">
  <div class="img-wrap">
    <img :src="product.imageUrl" />
  </div>
  <div class="product-details">
<h1> {{ product.name }}</h1>
<h3 class="price"> {{ product.price }} </h3>
<button @click="addToCart" class="add-to-cart">Add to cart</button>
</div>
</div>
<div v-if="!product">
<NotFoundPage />
</div>
</template>

<script>
import NotFoundPage from './NotFoundPage.vue';
import axios from 'axios'

export default {
name: "ProductDetailPage",
components: {
NotFoundPage
},
data(){
  return{
    product: {},
  }
},
methods: {
async addToCart(){
 await axios.post('/api/users/12345/cart',
 { id: this.$route.params.productId}
 )
 alert('Successfully added item to cart!');
}
},
async created(){
const response = await axios.get(`/api/products/${this.$route.params.productId}`);
const product = response.data;
this.product = product;
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