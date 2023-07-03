// STAMPA "HELLO" TRAMITE VUE.JS


const { createApp } = Vue;

const app = createApp({
    data() {
        return {
        message: 'Hello Spidy!',
        imageUrl: './img/spidy.jpg',
        };
    }
});

app.mount('#print-Message');

// PROBLEMA CON IMMAGINE: il problema è nel path che hai usato per l'immagine. Quando un path inizia con / fa riferimento alla root del documento.
// In locale la root del documento coincide con la cartella principale della repo, quindi non hai problemi, ma online fa riferimento ad una cartella inaccessibile 
//ad un livello superiore, quindi i tuoi percorsi non coincidono più. La soluzione è semplicemente eliminare lo / iniziale, oppure aggiungere un punto ./ per puntare al file corrente.
//Live server "simula" un server remoto, ma la logica di pathfinding è in locale quindi i percorsi coincidono