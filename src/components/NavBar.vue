<template>
  <div class="nav-bar">
    <router-link to="/products" class="products-link">
    <div class="logo-wrap">
        logo
    </div>
</router-link>
<router-link to="/cart" class="cart-link">
    <button>Shopping cart</button>
</router-link>
  </div>
</template>

<script>
export default {
name:"NavBar",
data() {
    return{
        
    }
}
}
</script>

<style>

</style>