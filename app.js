let solution = Math.trunc(Math.random() * 100 );
console.log(solution);
let lifes = 9;
let textLoose = document.getElementById("loose");
let divItem = document.getElementById("items");
let inputNumber = document.getElementById("foundNumber");
let button = document.getElementById("valide-button");
let divForNumber = document.createElement('div');
let create = document.createElement('p');
let reset = document.getElementById("reset");
let winReset = document.getElementById("win");




button.addEventListener("click", function (){

    if (lifes === 0) {

        textLoose.innerHTML = "You have loose !";
        textLoose.style.color = "red";
        textLoose.style.fontSize = "2rem";
        reset.innerHTML = "Try Again !";
        reset.style.color = "red";
        reset.style.fontSize = "2rem";
        button.remove();

    }
    else if (parseInt(inputNumber.value) === solution){
        divForNumber.innerHTML = inputNumber.value;
        divForNumber.style.fontSize = "15rem";
        divItem.append(divForNumber);
        create.innerHTML = "Congrats it's a great number"
        create.style.color = "green";
        divItem.append(create);
        divForNumber.style.color = "green";
        winReset.style.display = "block";

    }
    else if (parseInt(inputNumber.value) < solution) {
        textLoose.innerHTML = "Le chiffre à trouver est plus grand";
    }

    else if (parseInt(inputNumber.value) > solution) {
        textLoose.innerHTML = "Le chiffre à trouver est plus petit";
    }

   if (parseInt(inputNumber.value) !== solution) {
       divForNumber.innerHTML = inputNumber.value;
       divForNumber.style.fontSize = "15rem";
       divItem.append(divForNumber);
       lifes--;
       console.log(lifes)
       divForNumber.style.color = "red";
       create.remove();
       console.log(true);

    }

})







