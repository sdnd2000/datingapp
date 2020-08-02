<template>
<div class="container mt-5" >
  <form class="form-signin">
   <h1>Sign up</h1>
    <hr>
  <div class="form-group">
    <label class="control-label" style="margin-right:10px">I am a: </label>
    <label class="radio-inline">
      <input class="mr-3" type="radio" name="radioOption" value="male" formControlName="gender">Male
    </label>
    <label class="radio-inline ml-3">
      <input class="mr-3" type="radio" name="radioOption" value="female" formControlName="gender">Female
    </label>
  </div>


  <div class="form-group">
    <input class="form-control" placeholder="Known as" formControlName="knownAs">
  </div>

 <div class="form-group">
<label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail"  class="form-control" placeholder="Email address" required >
 </div>
 
  <div class="form-group">
  <label for="inputPassword"  class="sr-only">Password</label>
  <input type="password" id="inputPassword"  class="form-control" placeholder="Password" required>
  </div>



    <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="login()">Sign up</button>
  </form>

  
</div>
</template>

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