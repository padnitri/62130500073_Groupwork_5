app.component('image-preview',{
    props: {
      
        currentimg: {
            type: String,
            require: true
        }
    },
    template: 
        /*html*/
        `
        <div class="container  min-h-screen w-full flex flex-col h-full">
          <i style="color: aliceblue;"class="text-white self-end justify-self-center cursor-pointer mt-5 text-3xl p-3 material-icons"
            @click="Close">cancel</i>
          <div class="flex justify-center h-full items-center">
            <img :src="currentimg" >
          </div>
        </div>
        `
        
    ,
    methods: {
        Close(){
            this.$emit("close")
        }
        
    }
})