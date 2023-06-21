<template>
  
  <h1 class="product-title">Products</h1>
  <ProductsList :products="products"/>
</template>

<script>
import axios from 'axios';

import ProductsList from '@/components/ProductsList.vue';

export default {
    name: "ProductsPage",
components: {
  ProductsList,
},
    data(){
      return {
        products: [],
      }
    },
    async created(){
      const response = await axios.get('/api/products');
      const products = response.data;
      this.products = products;
    }
}
</script>

<style>
.grid-wrap{
  
}
.product-item{
  
  display:flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
}
.product-item img{
  max-width: 20rem;
  max-height: 20rem;
}
.product-item button{
  background: grey;
  border-style: none;
  width: 100px;
  height: 30px;
  cursor: pointer;
}
.product-title{
display: flex;
align-content: center;
align-items: center;
justify-content: center;
}
</style>