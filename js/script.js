/*
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. 
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
*/



// creaiamo array di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



// bersagliamo lo slider
// tramite un ciclo for prendiamo ogni indirizzo delle immagini dall'array
// per ognuno di essi andremo a creare un elemento img dentro lo slider


// bersagliamo lo slider
const sliderElement = document.getElementById("slider");


// tramite un ciclo for prendiamo ogni indirizzo delle immagini dall'array
for (let i = 0; i < images.length; i++) {

    // creo l'elemento per l'immagine del carosello
    const imgEl= document.createElement("img");

    // creo il contenitore delle informazioni delle immagini
    const infoEl= document.createElement("div");
    infoEl.classList.add("info-container");

    // creo l'elemento per il nome dell'immagine
    const imgNameEl= document.createElement("div");
    imgNameEl.classList.add("img-name");

    // creo l'elemento per la descrizione dell'immagine
    const imgTxtEl= document.createElement("div");
    imgTxtEl.classList.add("img-txt");



    const thumbnailsEl=document.querySelector("#thumbnails");

    const colEl=document.createElement("div");
    colEl.classList.add("col");


    const thumbnailsImgEl= document.createElement("img");

    for(let key in images[i]){

        if(key == "image"){
            // inserisco il link dell'i-esima immagine all'elemento img dello slider
            imgEl.src = images[i].image;

            // inserisco il link dell'i-esima immagine all'elemento img della thumbnails
            thumbnailsImgEl.src = images[i].image;
        }else if(key == "title"){
            // scrivo all'interno dell'elemento
            imgNameEl.innerText = images[i].title;

        }else{
            // scrivo all'interno dell'elemento
            imgTxtEl.innerText = images[i].text;

        }

        // inserisco gli elementi del titolo e descrizione dell'immagine nell'elemento del container
        infoEl.append(imgNameEl, imgTxtEl);

        // inserisco l'immagine e il container nello slider
        sliderElement.append(imgEl, infoEl);

        // inserisco l'immagine della thumbnails nella colonna
        colEl.append(thumbnailsImgEl);

        // inserisco la colonna nella thumbnails
        thumbnailsEl.append(colEl);

    }

    // per ognuno di essi andremo a creare un elemento img dentro lo slider

}

document.querySelector("#slider img:nth-of-type(1)").className = "active";
document.querySelector("#slider img:nth-of-type(1) + .info-container").classList.add("active");

/*
-  salvo un contatore della slide
-  QUANDO premo la freccia SU
    - prendo l'immagine attuale e le rimuovo la classe "active"  
    - aumento il contatore di 1
    - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
*/


// -  salvo un contatore della slide
let slideNumber = 1;

// -  QUANDO premo la freccia SU
document.querySelector("#up-arrow").addEventListener("click", function() {


    if (slideNumber < images.length) {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // prendo l'info box attuale e gli rimuovo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

        console.log(slideNumber);
        

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // prendo l'info box attuale e gli rimuovo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

    }

        
});


document.querySelector("#down-arrow").addEventListener("click", function() {

    if (slideNumber > 1) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // prendo l'info box attuale e gli rimuovo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

        console.log(slideNumber);

    } else {

        console.log("sasso");

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // prendo l'info box attuale e gli rimuovo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

    }
    


});





//  script per le thumbnails 

document.querySelector(".col:nth-of-type(1)").addEventListener("click", ()=>{

    // - prendo l'immagine attuale e le rimuovo la classe "active"  
    document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

    // prendo l'info box attuale e gli rimuovo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

    // - metto il valore di slideNumebr = alla posizione dell'immagine scelta
    slideNumber = 1;

    // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

    // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

});


document.querySelector(".col:nth-of-type(2)").addEventListener("click", ()=>{

    // - prendo l'immagine attuale e le rimuovo la classe "active"  
    document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

    // prendo l'info box attuale e gli rimuovo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

    // - metto il valore di slideNumebr = alla posizione dell'immagine scelta
    slideNumber = 2;

    // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

    // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

});


document.querySelector(".col:nth-of-type(3)").addEventListener("click", ()=>{

    // - prendo l'immagine attuale e le rimuovo la classe "active"  
    document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

    // prendo l'info box attuale e gli rimuovo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

    // - metto il valore di slideNumebr = alla posizione dell'immagine scelta
    slideNumber = 3;

    // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

    // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

});


document.querySelector(".col:nth-of-type(4)").addEventListener("click", ()=>{

    // - prendo l'immagine attuale e le rimuovo la classe "active"  
    document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

    // prendo l'info box attuale e gli rimuovo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

    // - metto il valore di slideNumebr = alla posizione dell'immagine scelta
    slideNumber = 4;

    // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

    // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

});


document.querySelector(".col:nth-of-type(5)").addEventListener("click", ()=>{

    // - prendo l'immagine attuale e le rimuovo la classe "active"  
    document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

    // prendo l'info box attuale e gli rimuovo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

    // - metto il valore di slideNumebr = alla posizione dell'immagine scelta
    slideNumber = 5;

    // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

    // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

});




// script per l'auto play

document.querySelector("#btn-autoplay").addEventListener("click", ()=>{

    const play = setInterval(autoPlay, 1 *1000);


    document.querySelector("#btn-stop").addEventListener("click", ()=>{
        clearInterval(play);
    })

});

// variabile che decide il "verso" dello slide: vero verso "destra", falso verso "sinistra" (seguendo in questo caso lo slider creato) 
let verso=true;

function autoPlay(){

    if(verso){
    if (slideNumber < images.length) {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // prendo l'info box attuale e gli rimuovo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

        console.log(slideNumber);
        

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // prendo l'info box attuale e gli rimuovo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

    }

}else{

    if (slideNumber > 1) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // prendo l'info box attuale e gli rimuovo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

        console.log(slideNumber);

    } else {

        console.log("sasso");

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        // prendo l'info box attuale e gli rimuovo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.remove("active");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        // - prendo info-box con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber}) + .info-container`).classList.add("active");

    }

}


}


document.querySelector("#btn-inverti").addEventListener("click", ()=>{

    if(!verso){
        verso=true;
    }else{
        verso=false;
    }

})