// STAMPA "HELLO" TRAMITE VUE.JS


const {createApp} = Vue 
const app = createApp({
    data(){
        return{
            message: 'Hello Vue!'
        }
    }
});
app.mount('#print-Message');