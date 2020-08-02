import Signin from './components/Signin.vue'
import Home from './components/Home.vue'
import Reg from './components/Registration.vue'
import Memdetail from './components/MemberDetails.vue'
import Memlist from './components/MemberList.vue'

export const routes=[
    {path:'/home',name:'home',component:Home},
    {path:'/login',name:'login',component:Signin},
    {path:'/reg',name:'reg',component:Reg},
    {path:'/memdetail',name:'memdetail',component:Memdetail},
    {path:'/memlist',name:'memlist',component:Memlist}
];