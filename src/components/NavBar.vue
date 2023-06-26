<template>
  <div class="nav-bar">
    <router-link style="text-decoration: none; color: inherit" to="/products" class="products-link">
    <div class="logo-wrap">
        <img src="./../assets/headphone-logo.jpg" />
      <span class="title-nav">electrostore.com</span>
    </div>
</router-link>
<div>
  <button @click="signOut" v-if="user">Sign Out</button>
  <router-link to="/cart">
<button>cart</button>
</router-link>
</div>

  </div>
</template>

<script>
import { getAuth, signOut} from 'firebase/auth'

export default {
name:"NavBar",
props: ['user'],
components: {
  
},
data() {
    return{
        
    }
},
methods: {
  signOut(){
    const auth = getAuth();
    signOut(auth);
  }
}
}
</script>

<style>
.title-nav{
font-size:2rem;
font-weight: 300;
}
.nav-bar{
  display:flex;
  justify-content: space-between;
}
.logo-wrap img{
max-width:80px;
max-height: 100px;
}
.nav-bar button{
  margin:.25rem;
  border-radius:3px;
  color:white;
  height: 60px;
  width: 100px;
  border-style: none;
  background-color: #555555;  
  transition: 1s;
  font-size: 1rem;
}
.nav-bar button:hover{
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  background-color: black;
}
.cart-link{
  
}

</style>