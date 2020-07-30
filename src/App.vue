<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
    <!-- <Home/>
    <Reg/>
    <Membercard/>
    <Signin/> -->
  </div>
</template>

<script>
import Nav from './components/Navigation.vue'
/* import Home from './components/Home.vue'
import Reg from './components/Registration.vue'
import Membercard from './components/Membership.vue'
import Signin from './components/Signin.vue' */

export default {
  name: 'App',
  components: {
    Nav
   
  }
}
</script>

<style>

</style>
