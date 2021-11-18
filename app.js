let solution = Math.trunc(Math.random() * 100 );
console.log(solution);
let lifes = 9;
let textLoose = document.getElementById("loose");
let divItem = document.getElementById("items");
let inputNumber = document.getElementById("foundNumber");
let button = document.getElementById("valide-button");
let divForNumber = document.createElement('div');
let create = document.createElement('p');



if (lifes > - 1) {
    button.addEventListener("click", function (){
        divForNumber.innerHTML = inputNumber.value;
        divForNumber.style.fontSize = "15rem";
        divItem.append(divForNumber);
        lifes--;
        console.log(lifes)

        if (parseInt(inputNumber.value) === solution){

            create.innerHTML = "Congrats it's a great number"
            create.style.color = "green";
            divItem.append(create);
            divForNumber.style.color = "green";
        }
        else if (parseInt(inputNumber.value) < solution) {
            textLoose.innerHTML = "Le chiffre à trouver est plus grand";
        }

        else if (parseInt(inputNumber.value) > solution) {
            textLoose.innerHTML = "Le chiffre à trouver est plus petit";
        }

       if (parseInt(inputNumber.value) !== solution) {
            divForNumber.style.color = "red";
            create.remove();
            console.log(true);

        }

    })
} else {
    textLoose.innerHTML = "You have loose";
    console.log(true);
}







