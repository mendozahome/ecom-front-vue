<template>
<NavBar :user="user"/>
<div class="page-wrap">
  <router-view :user="user"></router-view>
</div>

</template>

<script>
import NavBar from './components/NavBar.vue';
import { getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
  name: 'App',
  components: {
  NavBar,
  },
  data(){
return{
  user:null,
}
  },
  created(){
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
    this.user = user;
    });

  }
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');
.page-wrap{
  font-family: 'Inter', sans-serif;
}

</style>