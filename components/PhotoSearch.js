app.component('image-search', {
    props: {
        isshowsearchbox: {
            type: Boolean,
            require: true
        },
        isfound: {
            type: Boolean,
            require: true
        }
    },
    template:
        /*html*/
        `
        <div class="flex justify-between space-x-2 mb-10">
        <button style="color: cornsilk;" @click="showSearchBox" v-show="!isshowsearchbox"
          class="bg-red-500 text-white  py-1 px-6 rounded material-icons cursor-pointer"> search </button>
        <input type="text" v-model="keyword" v-if="isshowsearchbox" @keyup.enter="Search"
          placeholder="Please enter text for searching photos"
          class="p-2 bg-white rounded flex-1 border-2 border-black-500">

        <button style="color: cornsilk;" @click="Cancel" v-if="isshowsearchbox"
          class="bg-red-500 text-white py-1 px-6 rounded  material-icons"> search_off </button>
      </div>
      <p v-if="!isfound" class="flex justify-center"> Not found. </p>
      
   
   `, data() {
        return {
            keyword: ""
        }
    },

    methods: {
        showSearchBox() {
            this.$emit("show-searchbox")
        },
        Cancel() {
            this.$emit("cancel")
        },
        Search() {
            this.$emit("search", this.keyword)
        }
    },

})