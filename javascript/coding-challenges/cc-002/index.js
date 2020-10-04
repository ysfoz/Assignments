


function reverse(str) {
const myArray = []
reverseStr = ''
for (let i = (str.length)-1; i >= 0;i--){
    myArray.push(str[i])     
}
myArray.forEach(letter =>{
    reverseStr += letter
})
return reverseStr
}

console.log(reverse('bugun hava cok guzel'))