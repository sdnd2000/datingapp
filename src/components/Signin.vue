<template>

<!-- <form class="form-signin">

  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  <div class="form-group">
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" v-model="input.username" class="form-control" placeholder="Email address" required >
  </div>
  <div class="form-group">
  <label for="inputPassword"  class="sr-only">Password</label>
  <input type="password" id="inputPassword" v-model="input.password" class="form-control" placeholder="Password" required>
  </div>

  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="login()">Sign in</button>
  <p class="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
</form> -->

<form class="form-signin">
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  <div class="form-group">
    <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" v-model="input.username" class="form-control" placeholder="Email address" required >
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="inputPassword"  class="sr-only">Password</label>
  <input type="password" id="inputPassword" v-model="input.password" class="form-control" placeholder="Password" required>
  </div>
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="login()">Sign in</button>
</form>


</template>

<script>
import loginData from "../data/login.json";
import {eventBus} from '../main';
export default {
  data(){
    return { 
      input:{
        username:"",
        password:""
      }
    }
  },
  methods:{
    login(){
      if(this.input.username !="" && this.input.password !=""){
        loginData.loginList.forEach(x => {
             if (x.username == this.input.username && x.password== this.input.password){
               console.log ("username: "+x.username,"password: "+x.password)
               console.log("login successful");
                eventBus.$emit('login',true);
                this.$router.replace({name:"home"});
                return;
             }
        })
      }
    }
  }
}
</script>



<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>