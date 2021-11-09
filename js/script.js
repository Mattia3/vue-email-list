Vue.config.devtools = true;

new Vue({
  el: "#root",
  data:{
   apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
   userEmail: [],
   
  },

  methods:{
    startCreateEmail(){
      
      for (let i = 0; i < 10; i++) {
        axios.get(this.apiUrl).then((ajaxResponse) => {
          this.userEmail.push(ajaxResponse.data.response) 
        })
      }
    }
  }

})