
// Ottieni l'elemento della stanza
let stanza = document.getElementById("stanza");

// Ottieni le dimensioni della stanza
let x = stanza.clientWidth;
let y = stanza.clientHeight;

// Ottieni la posizione iniziale della guardia
let sopra = document.getElementById("guardia").style.top;
let sinistra = document.getElementById("guardia").style.left;

// Contatore per il numero di click
let numeroClick = 0;

// Aggiungi l'evento di click al pulsante "Nord" che chiamerà le funzioni "sali" e "spostaLadro"
document.getElementById("nord").addEventListener("click", sali);

// Funzione per spostare la guardia verso l'alto
function sali() {
    // Ottieni la posizione attuale della guardia accedendo al top dello style 
    let sopra = document.getElementById("guardia").style.top;
    // Sottrai 50 pixel dalla posizione attuale per spostare la guardia verso l'alto , la substring prende 200 e quel -2 toglie px poi 200 da stringa viene convertito in numero  
    sopra = Number(sopra.substring(0, sopra.length - 2)) - 50;

    // Verifica se la nuova posizione della guardia è all'interno dei limiti della stanza
    if (sopra >= 0) {
        // Aggiorna la posizione della guardia
        document.getElementById("guardia").style.top = sopra + "px";
    }

    // Incrementa il contatore di click
    numeroClick++;
    // Controlla se il numero di click ha raggiunto il limite
    checkNumeroClick();
    // Sposta il ladro
    spostaLadro();
    document.getElementById("numtentativi").innerHTML= "Num. Tentativi: " + numeroClick;
}

// Aggiungi l'evento di click al pulsante "Sud" che chiamerà le funzioni "scendi" e "spostaLadro"
document.getElementById("sud").addEventListener("click", scendi);

// Funzione per spostare la guardia verso il basso
function scendi() {
    // Ottieni la posizione attuale della guardia
    let sopra = document.getElementById("guardia").style.top;
    // Aggiungi 50 pixel alla posizione attuale per spostare la guardia verso il basso
    sopra = Number(sopra.substring(0, sopra.length - 2)) + 50;

    // Verifica se la nuova posizione della guardia è all'interno dei limiti della stanza
    if (sopra < y - 35) {
        // Aggiorna la posizione della guardia
        document.getElementById("guardia").style.top = sopra + "px";
    }

    // Incrementa il contatore di click
    numeroClick++;
    // Controlla se il numero di click ha raggiunto il limite
    checkNumeroClick();
    // Sposta il ladro
    spostaLadro();
    document.getElementById("numtentativi").innerHTML= "Num. Tentativi: " + numeroClick;
}

// Aggiungi l'evento di click al pulsante "Est" che chiamerà le funzioni "dx" e "spostaLadro"
document.getElementById("est").addEventListener("click", dx);

// Funzione per spostare la guardia verso destra
function dx() {
    // Ottieni la posizione attuale della guardia
    let sinistra = document.getElementById("guardia").style.left;
    // Aggiungi 50 pixel alla posizione attuale per spostare la guardia verso destra
    sinistra = Number(sinistra.substring(0, sinistra.length - 2)) + 50;

    // Verifica se la nuova posizione della guardia è all'interno dei limiti della stanza
    if (sinistra < x - 46) {
        // Aggiorna la posizione della guardia
        document.getElementById("guardia").style.left = sinistra + "px";
    }

    // Incrementa il contatore di click
    numeroClick++;
    // Controlla se il numero di click ha raggiunto il limite
    checkNumeroClick();
    // Sposta il ladro
    spostaLadro();
    document.getElementById("numtentativi").innerHTML= "Num. Tentativi: " + numeroClick; 
}

// Aggiungi l'evento di click al pulsante "Ovest" che chiamerà le funzioni "sx" e "spostaLadro"
document.getElementById("ovest").addEventListener("click", sx);

// Funzione per spostare la guardia verso sinistra
function sx() {
    // Ottieni la posizione attuale della guardia
    let sinistra = document.getElementById("guardia").style.left;
    // Sottrai 50 pixel dalla posizione attuale per spostare la guardia verso sinistra
    sinistra = Number(sinistra.substring(0, sinistra.length - 2)) - 50;

    // Verifica se la nuova posizione della guardia è all'interno dei limiti della stanza
    if (sinistra >= 0) {
        // Aggiorna la posizione della guardia
        document.getElementById("guardia").style.left = sinistra + "px";
    }

    // Incrementa il contatore di click
    numeroClick++;
    // Controlla se il numero di click ha raggiunto il limite
    checkNumeroClick();
    // Sposta il ladro
    spostaLadro();

    document.getElementById("numtentativi").innerHTML= "Num. Tentativi: " + numeroClick; 
}

function ricaricapagina (){

    location.reload(); 

}

// Funzione per controllare il numero di click e mostrare partita finita se il limite viene raggiunto
function checkNumeroClick() {
    if (numeroClick >= 20) {   // 20 perchè sono il num. max di click che ho a disposiz. 
        // Nascondi i pulsanti
        document.getElementById("pulsanti").style.display = "none";
        // Mostra il messaggio 
        document.getElementById("esito").innerHTML = "Partita finita !";
        document.getElementById("esitogif").innerHTML = "<div style='width:100%;height:0;padding-bottom:50%;position:relative;'><iframe src='https://giphy.com/embed/12nfFCZA0vyrSw' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div>"
        document.getElementById("ricomincia").style.display="inline";
        document.getElementById("ricominciaPartita").addEventListener("click" , ricaricapagina);
    }
}


// Aggiunge gli eventi di click ai pulsanti "Nord", "Sud", "Est" e "Ovest" che chiameranno la funzione "spostaLadro"
document.getElementById("nord").addEventListener("click", spostaLadro);
document.getElementById("sud").addEventListener("click", spostaLadro);
document.getElementById("est").addEventListener("click", spostaLadro);
document.getElementById("ovest").addEventListener("click", spostaLadro);

// Funzione per spostare il ladro
function spostaLadro() {

    // Associa la variabile ladro al div ladro
    let ladro = document.getElementById("ladro");
    // Ottieni le posizioni attuali del ladro , ricavando il numero intero 
    let ladroX = parseInt(ladro.style.left);
    let ladroY = parseInt(ladro.style.top);

    // Array di movimenti possibili
    let movimenti = ["sinistra", "destra", "sopra", "sotto"];
    // Genera un movimento casuale nelle 4 direzioni 
    let movimentoCasuale = movimenti[Math.floor(Math.random() * movimenti.length)];


    // Switch che sposta il ladro di 50 px in base al movimento casuale , 
    switch (movimentoCasuale) {
        case "sinistra":
            ladroX -= 50;     // ladroX è lo spostamento del div sull'asse orizzontale
            break;
        case "destra":
            ladroX += 50;
            break;
        case "sopra":
            ladroY -= 50;     // ladroY è lo spostamento del div sull'asse verticale
            break;
        case "sotto":
            ladroY += 50;
            break;
    }



    //  Si assicura che il ladro rimanga all'interno della stanza  
    // 46 è la larghezza del ladro stesso mentre 35 è la sua altezza
    if (ladroX >= 0 && ladroX <= x - 46 && ladroY >= 0 && ladroY <= y - 35) {
        // Aggiorna le posizioni del ladro
        ladro.style.left = ladroX + "px";
        ladro.style.top = ladroY + "px";
    }

    // Verifica se il ladro si trova nella stessa posizione della guardia per vincere la partita 
    if (ladroX === parseInt(document.getElementById("guardia").style.left) && ladroY === parseInt(document.getElementById("guardia").style.top)) {

        document.getElementById("pulsanti").style.display = "none";
        document.getElementById("esito").innerHTML = "Hai vinto";
        document.getElementById("esitogif").innerHTML = "<div style='width:100%;height:0;padding-bottom:50%;position:relative;'><iframe src='https://giphy.com/embed/Wrd8QwEkxh5Re' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div>"
        document.getElementById("ricomincia").style.display="inline";
        document.getElementById("ricominciaPartita").addEventListener("click" , ricaricapagina);
        
        return;
    }

 
    
}

