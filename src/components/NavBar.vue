<template>
  <div class="nav-bar">
    <router-link to="/products" class="products-link">
    <div class="logo-wrap">
        <img src="./../assets/headphone-logo.jpg" />
      electrostore.com
    </div>
</router-link>
<router-link to="/cart" class="cart-link">
cart
</router-link>
  </div>
</template>

<script>


export default {
name:"NavBar",
components: {
  
},
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
.nav-bar img:hover{
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  
}
.cart-link{
  
}

</style>