<template>
  <div class="nav-bar">
    <router-link to="/products" class="products-link">
    <div class="logo-wrap">
        <img src="./../assets/headphone-logo.jpg" />
    </div>
</router-link>
<router-link to="/cart" class="cart-link">
    <button></button>
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
.nav-bar{
  display:flex;
  justify-content: space-between;
}
.logo-wrap img{
max-width:80px;
max-height: 100px;
}
.nav-bar button{
  background-image: url('./../assets/shopping-cart.png');
  background-repeat: no-repeat;
  height: 70px;
  width: 80px;
  border-style: none;
  background-color: white;  
transition: 1s;
}
.nav-bar button:hover{
  height: 75px;
  width: 85px;
  
}
</style>