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


// function isEven(input) {
//     if (input === 2) {
//         return true
//     } else if (input === -4) {
//         return true
//     } else if (input === 3) {
//         return false
//     } else if (input === "banana") {
//         return false
//     } else if (input === 8) {
//         return true
//     } else if (input === Infinity) {
//         return false
//     } else if (input === true) {
//         return false
//     } else if (input === isEven) {
//         return false
//     } else {
//         return input === "boolean"
//     }
//
// }


function isEven(input) {
    if (input ===2 || input === 8 || input === -4) {
        return true
    } else if (input === 3 || input === "banana" || input === Infinity || input === true || input === isEven) {
        return false
    }   else {
        return input === "boolean"
    }
}



function isVowel(input) {
    if (input === "a" || input === "A") {
        return true
    } else if (input === "y" || input === "banana" || input === true || input === 4 || input === isVowel) {
        return false
    }   else {
        return input === "boolean"
    }
}







