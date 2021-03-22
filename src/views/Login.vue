<template> 
<div  class="backG bg-gradient-to-r from-white via-gray-900 to-white h-screen w-full flex justify-center items-center">
      

         <div class="login-panel mt-60 flex justify-center h-80 w-1/3 bg-white rounded-lg bg-opacity-75">
            <form class="w-11/12" v-if="!submitted">
             <h1 class="text-gray-700 text-center text-3xl ml-2 mb-5 ">Login</h1><br>
            <div class="ml-10">
            <label class="block ml-10 mt-10 text-xl text-gray-600">Email:</label>
            <input type="email"  class="h-10 rounded py-4 w-full border border-gray-100 focus-within:outline-none p-4"   required /><br>
            <label class="block mt-10 ml-10 text-xl text-gray-600">Password:</label>
            <input class=" w-full h-10 ml-10 rounded border border-gray-100 focus:outline-none" type="password"  required /><br>
            </div><br>
                <button class="ml-40 h-10 w-20 px-4 p-4 mt-10 text-white bg-blue-900 rounded-lg border-gray-400 border" v-if="!isLoggingIn" v-on:click="login">Login</button>
            
        </form>
        
</div>
</div>
<!-- <section class="container-fluid ml-96">
 <div class="row justify-content-center">
     <div class="col-lg-4">
         <div class="login-panel bg-white text-left">
             <div class="alert alert-primary">
                 Login successfully. <small>Waiting for redirect</small>
             </div>
             <h1 class="display-3 font-weight-bold">Login</h1>
             <p class="font-weight-bold">Welcome back</p>
             <br>
             <form action="">
                 <div class="form-group">
                     <label for="email" class="input-label">Email</label>
                     <input type="email" class="form-control" placeholder="Email" name="" id="">
                 </div>
                  <div class="form-group">
                     <label for="password" class="input-label">Email</label>
                     <input type="password" class="form-control" placeholder="Password" name="" id="">
                 </div>
                 <br>
                 <div class="form-group d-flex">
                     <button class="btn btn-primary w-24" v-if="!isLoggingIn" @click="login">Login</button>
                 </div>
             </form>
         </div>
     </div>
 </div>
</section>  -->
</template>

<script>
export default {
    components: {
        
    },
    data () {
        return {
          isLoggingIn:false
        }
    },
    methods: {
        login(){
            this.isLoggingIn = true
            setTimeout(()=>{
                this.isLoggingIn = false
                setTimeout(()=>this.redirect(),1000)
            },1000)
        },
        redirect(){
            this.$router.push({name:'Dashboard'})
        },
        handleSubmit: function(){
            alert('thanks for logging in (form two)');
        }
    }
}
</script>
 

 <style scoped>
 *{
     padding: 0;
     margin: 0;
 }
 .backG{
     /* background: url("/mike.jpg"); */
     background-image:
    linear-gradient(to bottom, rgba(29, 30, 31, 0.52), rgba(39, 38, 39, 0.73)),
    url('/mike.jpg');
 }
 </style>
