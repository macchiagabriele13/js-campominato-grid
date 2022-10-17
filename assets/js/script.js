/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. */

/* Seleziono il bottone */
const bottoneGeneratore = document.querySelector(".btn_play")
console.log(bottoneGeneratore);

/* Seleziono la griglia */
const containerGrid = document.querySelector('.container')
console.log(containerGrid);

/* Creo i miei box */

for (let i = 1; i <= 100; i++) {
  const boxEl = document.createElement('div')
  boxEl.classList.add('box')
  containerGrid.append(boxEl)
}
  /* //console.log(boxEl); */





/* Al click compare la mia griglia */


/* bottoneGeneratore.addEventListener("click", function name(params) {
    document.getElementByClass(".container").style.display = "none";
});
 */


/* Ogni cella ha un numero progressivo, da 1 a 100. */


/* Ci saranno quindi 10 caselle per ognuna delle 10 righe. */



/* Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */