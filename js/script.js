// STAMPA "HELLO" TRAMITE VUE.JS


const {createApp} = vue 
const app = createApp({
    data(){
        return{
            message: 'Hello Vue!'
        }
    }
})