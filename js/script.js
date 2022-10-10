// Scrivi un programma che stampi in console i numeri da 1 a 100
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// BONUS 1: Crea un container nel DOM, aggiungendo(attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

//Creo un loop che va da 0 a 100
// for (let num = 0; num <= 100; num++) {
//     /**All'aumentare del conteggio, se il numero è divisibile per 3 e divisibile per 5 stampo in consolle FizzBuzz, ho unito il numero con FizzBuzz per chiarezza.
//     **/
//     if ((0 == num % 3) && (0 == num % 5)) {
//         console.log("FizzBuzz" + " " + num);
//         //Se il numero è divisibile per 5 stampiamo Buzz
//     } else if (0 == num % 5) {
//         console.log("Buzz" + " " + num);
//         //Se il numero è divisibile per 3 stampiamo Fizz
//     } else if (0 == num % 3) {
//         console.log("fizz" + " " + num);
//     } else {
//         //nel frattempo, stampa ancora tutti i numeri che non soddisfano le condizioni sopra
//         console.log(num);
//     }
// }


//Creo un loop che va da 0 a 100
for (let i = 1; i <= 100; ++i) {
    const div3 = i % 3 === 0;
    const div5 = i % 5 === 0;

    
    if (div3 && div5) {
        /**All'aumentare del conteggio, se il numero è divisibile per 3 e divisibile per 5 stampo in consolle FizzBuzz, ho unito il numero con FizzBuzz per chiarezza.
     **/
        console.log(`FizzBuzz`);
    } else if (div3) {
        //Se il numero è divisibile per 3 stampiamo Fizz
        console.log(`Fizz`);
    } else if (div5) {
        //Se il numero è divisibile per 5 stampiamo Buzz
        console.log(`Buzz`);
    } else {
         //nel frattempo, stampa ancora tutti i numeri che non soddisfano le condizioni sopra
        console.log(i);
    }
}
