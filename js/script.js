// Scrivi un programma che stampi in console i numeri da 1 a 100
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// BONUS 1: Crea un container nel DOM, aggiungendo(attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

let myContainer = document.getElementById("fizz");

//Creo un loop che va da 0 a 100
for (let i = 1; i <= 100; ++i) {
    const myBox = document.createElement('div');    
    myBox.className = 'box';

    const div3 = i % 3 === 0;
    const div5 = i % 5 === 0;    

        /**All'aumentare del conteggio, se il numero è divisibile per 3 e divisibile per 5 stampo in consolle FizzBuzz, ho unito il numero con FizzBuzz per chiarezza.
        **/
    if (div3 && div5) {        
        console.log(`FizzBuzz`);
        myBox.className += ' fizzbuzz';
        myBox.append('fizzbuzz');    
    } 
        //Se il numero è divisibile per 3 stampiamo Fizz
    else if (div3) {
        console.log(`Fizz`);
        myBox.className += ' fizz';
        myBox.append('fizz'); 
    }
        //Se il numero è divisibile per 5 stampiamo Buzz
    else if (div5) {
        console.log(`Buzz`);
        myBox.className += ' buzz';
        myBox.append('buzz'); 
    } 
        //nel frattempo, stampa ancora tutti i numeri che non soddisfano le condizioni sopra    
    else {
         
        console.log(i);
        myBox.append(i);
    }

    myContainer.append(myBox);
}