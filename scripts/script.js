"use strict";
let ourHp = 40;
let grantsHp = 10;
let wins = 0;

function gameStart(answer) {
    var answer = prompt("Do you want to play?");
    if (answer === "yes") {
        let name = prompt("What is your name?");
        startCombat(name);


    } else {
        console.log("you woulda lost mane")
    }

}

gameStart();

function startCombat(name) {
    function getDamage() {
        return Math.floor(Math.random() * 5) + 1;
    }

    while (ourHp >= 0) {
        let continueGame = prompt("Attack: yes or no?");

        if (continueGame === "yes") {
            ourHp = ourHp - getDamage();
            console.log(`${name} has ${ourHp} health left!`);
            grantsHp = grantsHp - getDamage();
            console.log(`Grant the Almighty has ${grantsHp} health left!`);
            if (grantsHp <= 0) {
                wins++;
                grantsHp = 10;
                console.log(`${name} wins this round!`);
            }
            if (ourHp <= 0) {
                console.log(`Game over, try again!`);
                break;
            }
            if (wins === 3) {
                console.log(`${name} has defeated Grant The Almighty!`)
                break;
            }

        } else {
            console.log("Boo, you quitter!");
            break;
        }
    }
}


// while (ourHp >=0) {
//     ourHp=ourHp-getDamage
// ;
//     console.log(`${name} has ${ourHp} health left!`);
//     grantsHp=grantsHp-getDamage
// ;
//     console.log(`Grant the Almighty has ${grantsHp} health left!`);
//     if (grantsHp <=0) {
//         wins++;
//         grantsHp = 10;
//         console.log(`${name} wins this round!`)
//     }
//     if (ourHp <=0){
//         break;
//         console.log(`Game over, try again!`)
//     }
//     if (wins === 3) {
//         console.log(`${name} has defeated Grant The Almighty!`)
//         break;
//     }

// }












// if (gameStart == "yes") {
//     let name = prompt("What is your name?");

//     while (ourHp >=0) {
//         ourHp=ourHp-getDamage;
//         console.log(`${name} has ${ourHp} health left!`);
//         grantsHp=grantsHp-getDamage;
//         console.log(`Grant the Almighty has ${grantsHp} health left!`);
//         if (grantsHp <=0) {
//             wins++;
//             grantsHp = 10;
//             console.log(`${name} wins this round!`)
//         }
//         if (ourHp <=0){
//             break;
//             console.log(`Game over, try again!`)
//         }
//         if (wins === 3) {
//             console.log(`${name} has defeated Grant The Almighty!`)
//             break;
//         }

// }

// } else if (gameStart == "no") {
//     console.log("You would have lost anyway.")
// } else {
//     console.log("That's not valid.")

// }



// let wins = ;

// 

// }



// wins
// ourHp
// grantsHp