//todo Creata variabile assegnata ad una nuova classe Vue e con all'interno oggetto con proprieta El
const app = new Vue({

    el: "#root",   //*Il contenuto della proprietà El è l'id dell'elemento di partenza di Vue
    data: {
        message: "ciao",
        imgPath: 'img/01.jpg', 
        styleObject: {
            fontSize: '3em',
            fontWeight: 600,
            color: 'red'
        }
    }

})
    
    
    
