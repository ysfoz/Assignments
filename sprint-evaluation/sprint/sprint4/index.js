
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector('#result');


button.addEventListener("click", Finder)

    function Finder() {
    let number = input.value;
    let elements = [...range(1,number)]
    let divisors = elements.filter(e => number % e == 0)
    total(divisors) == number ? result.innerHTML = 'This is a perfect Number' : result.innerHTML = 'This is not a perfect number'
    input.value = ''
    input.focus()    
    }


function range(start,end) {
    rangedNumbers = []
    for(let i = start; i < end; i++){
       rangedNumbers.push(i)
    }
    return rangedNumbers
}

function total(list) {
    let addition = 0
    list.forEach(element => {
     addition += element   
    });
    return addition
}

