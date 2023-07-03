// STAMPA "HELLO" TRAMITE VUE.JS


const { createApp } = Vue;

const app = createApp({
    data() {
        return {
        message: 'Hello Spidy!',
        imageUrl: '/img/spidy.jpg'
        };
    }
});

app.mount('#print-Message');