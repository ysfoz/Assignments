
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector('#result');

button.addEventListener("click", Tester)

   result.innerHTML 
    function Tester() {
    let email = input.value;
    const letters = /^[0-9a-zA-Z,'@','.']+$/;
    const first = email.split('.')
    const second = email.split('@')
    const numberList = [0,1,2,3,4,5,6,7,8,9]
    
    
    if (first.length !=2 || second.length  != 2) {
        input.value = ''
        input.focus()
        result.innerHTML ="You entered an invalid E-mail Please try again..."
    }else if (first.includes('') || second.includes('')){
        input.value = ''
        input.focus()
        result.innerHTML ="You entered an invalid E-mail,Please try again..."
    }else if (email.indexOf('.') != (email.length - 3) && email.indexOf('.') != (email.length - 4)){
        input.value = ''
        input.focus()
        result.innerHTML ="You entered an invalid E-mail,Please try again..."
        
    }else if (first[0][0] in numberList){ // match ile de daha kolay yapilabilir
        input.value = ''
        input.focus()
        result.innerHTML ="You entered an invalid E-mail,Please try again..."
    }else if (!email.match(letters)){
        input.value = ''
        input.focus()
        result.innerHTML ="You entered an invalid E-mail,Please try again..."
    }else{
        result.innerHTML ="Welcome to our webseite"
    }
    
    
}

