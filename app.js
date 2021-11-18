let solution = Math.trunc(Math.random() * 100 );
console.log(solution);
let lives = 10;
let divItem = document.getElementById("items");
let inputNumber = document.getElementById("foundNumber");
let button = document.getElementById("valide-button");
let divForNumber = document.createElement('div');

    button.addEventListener("click", function (){
        divForNumber.innerHTML = inputNumber.value;
        divForNumber.style.fontSize = "15rem";
        divItem.append(divForNumber);
        if (parseInt(inputNumber.value) === solution){
            let create = document.createElement('p');
            create.innerHTML = "Congrats it's a great number"
            create.style.color = "green";
            divItem.append(create);
            divForNumber.style.color = "green";
        }

        else {
            divForNumber.style.color = "red";
        }

    })


