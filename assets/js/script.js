/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. */

/* Seleziono il bottone */
const bottoneGeneratore = document.querySelector(".btn_play")
console.log(bottoneGeneratore);

/* Seleziono la griglia */
let containerGrid = document.querySelector('.container')
console.log(containerGrid);

/* Creo i miei box */

/* for (let i = 1; i <= 100; i++) {
  const boxEl = document.createElement('div')
  boxEl.classList.add('box')
  containerGrid.append(boxEl)
} */

/* Devo rendere flessibile la griglia attraverso una funzione */

let numbMax = 100

let boxEl = document.getElementsByClassName('.box')

boxGenerator(numbMax, containerGrid)

function boxGenerator(numero, griglia) {
   for (let i = 1; i <= numero; i++) {
    griglia.innerHTML += `<div class="box" id="${i}"></div>`
   }

}

/* for(let i = 1; i <= boxEl.length; i++){
    let currentBox = boxEl[i]
    console.log(currentBox);

    /* currentBox.addEventListener("click", function(){
        currentBox.classList.toggle("azzurro")
        console.log(currentBox.id)
    }) */


/* Al click compare la mia griglia */


bottoneGeneratore.addEventListener("click", function () {
    containerGrid.style.display = "flex";
});



/* Ogni cella ha un numero progressivo, da 1 a 100. */


/* Ci saranno quindi 10 caselle per ognuna delle 10 righe. */



/* Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */