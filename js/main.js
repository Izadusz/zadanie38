function displayResults(num1, num2) {

    let add = num1 + num2;
    let substract = num1 - num2;
    let multiply = num1 * num2;

    if(add>= 0) {
        console.log("wynik dodawania wynosi " + add);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }

    if(substract>= 0) {
        console.log("wynik odejmowania wynosi " + substract);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }

    if(multiply>= 0) {
        console.log("wynik mnożenia wynosi " + multiply);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }
}

displayResults(4, 5);