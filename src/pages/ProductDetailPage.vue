<template>
  <div v-if="product">
  <div class="img-wrap">
    <img :src="product.imageUrl" />
  </div>
  <div class="product-details">
<h1> {{ product.name }}</h1>
<h3 class="price"> {{ product.price }} </h3>
<button class="add-to-cart">Add to cart</button>
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
</style>