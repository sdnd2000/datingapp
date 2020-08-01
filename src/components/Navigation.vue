<template>
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="#">People's Park</a>
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Matches</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Lists</a>
            </li> 
            <li class="nav-item">
                <a class="nav-link " href="#">Messages</a>
            </li>
            </ul>
             <div class="dropdown" v-if ="login">
                <a class="dropdown-toggle text-light">
                    Welcome User
                </a>

                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Profile</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><i class="fa fa-sign-out"></i>Logout</a>
                </div>
            </div>
</nav>
</template>
<script>
import {eventBus} from '../main';
export default {
    props: {
        login:Boolean
    },
    created(){
        eventBus.$on('login',(data)=>{
            this.login = data;
        })
    }
    
}
</script>