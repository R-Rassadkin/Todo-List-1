 const App={
    data(){
        return{
            now:new Date().toLocaleDateString(),
            arr:[],
            message:'',
        }
    },
methods:{
    add(){
        if (this.message!='' && this.arr.length < 7) {
        this.arr.push(this.message)
        this.message=''
        }
        
    },
    remove(i){
        this.arr.splice(i,1)
    },
},
computed:{
    xxx(){
        return this.arr.length
    }
}

}
Vue.createApp(App).mount('#app')