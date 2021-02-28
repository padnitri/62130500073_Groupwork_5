app.component('image-list', {
    props: {
        lists: { type: Array,
        require: true
        },
        isshowimg: {
            type: Boolean,
            require: true
        },
        currentimg: {
            type: String,
            require: true
        }
    },
    template:
        /*html*/
        `
        <div v-if="!isShowImg">
        <div v-for="(list,index) in lists" class="flex items-center" :class="[list.isHidden ? 'hidden' : '']">
        <div class="flex flex-col mt-20">
         
         <span style="color: darkorange; font-weight: bold;"> {{ list.name }} </span>
          <img :src="list.image" :alt="list.name" :key="list.name" class="ml-48 mb-10 h-60 w-60 cursor-pointer"
            @click="handleClickImg(index)">
        </div>
    
        <button v-if="list.isFav" class="material-icons w-12 h-12 mt-5 ml-20" @click="updateFav(index)">
          favorite</button>
        <button v-else class="material-icons w-12 h-12 mt-5 ml-20 " @click="updateFav(index)"> favorite_border </button>
      </div>
      </div>
      
   
   `,

    methods: {
        handleClickImg(index) {
            this.$emit('handle-click-img', index)
        },
        updateFav(index) {
            this.$emit('update-fav', index)
        }
    }
})