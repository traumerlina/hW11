const $calc = document.getElementById("calc");
let anything = [100, 55, 15];

function summ(mass) {
    let element = 0
    let itogo = ""
    for (let index = 0; index < mass.length; index++) {
        result = element + mass[index];

        itogo += element + "+" + mass[index] + "=" + result + "<br>";

        element = result;
        console.log(itogo);


    }
    return itogo
}

$calc.innerHTML = summ(anything);