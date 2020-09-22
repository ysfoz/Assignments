document.getElementById("submit").addEventListener("click",

function fibonacci(){
    let num = document.getElementById('number').value;
    let b = 2, a = 1, c;
    while (num > 2){
       c = a + b;
       a = b;
       b = c;
       num--;
}
document.getElementById("result").innerHTML = b
})

