<template>
  
  <h1 class="product-title">Products</h1>
  <ProductsList :products="products"/>
</template>

<script>
import { products } from './../temp-data';
import ProductsList from '@/components/ProductsList.vue';

export default {
    name: "ProductsPage",
components: {
  ProductsList,
},
    data(){
      return {
        products,
      }
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