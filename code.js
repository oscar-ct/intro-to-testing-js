// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input) {
//     if ( input === "Alex") {
//         return "Hello, Alex!";
//     } else if ( input === "Pat") {
//         return "Hello, Pat!"
//     } else {
//         return "Hello, Jane!";
//     }
// }

// function sayHello(input) {
//     if (input === false) {
//         return "Hello, World!"
//     }   else if (input === null) {
//         return "Hello, World!";
//     }   else if (input === "") {
//         return "Hello, World!";
//     }   else if (input === 2.3) {
//         return "Hello, World!";
//     }   else {
//         return "Hello, " + input + "!";
//     }
// }

function sayHello(input) {
    if (input === false || input == null || input === "" || input === 2.3) {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}



function isFive(input) {
    if (input === 5) {
        return true
    }  else if (input === "5") {
        return false
    }  else {
        return input === "boolean"
        }
}
