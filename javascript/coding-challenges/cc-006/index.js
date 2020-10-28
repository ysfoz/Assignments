
const numberInput = document.querySelector("#number");
const romanInput = document.querySelector("#roman");
const numberButton = document.querySelector("#btnNum");
const romanButton = document.querySelector("#btnRoman");
const resultNum = document.querySelector('#resultNum');
const resultRoman = document.querySelector('#resultRoman');

// numberButton.addEventListener("click", Converter)

// S	0.5 (yarım) (Latince:Latince: Semis)
// I	1 (bir) (Latince:Latince: mono)
// V	5 (beş) (Latince:Latince: penta)
// X	10 (on) (Latince:Latince: deka)
// L	50 (elli) (Latince:Latince: quinquaginta)
// C	100 (yüz) (Latince:Latince: Centum)
// D	500 (beş yüz) (Latince:Latince: quingenti)
// M	1000 (bin) (Latince:Latince: Mille)

    
const numberList = { M:1000,D:500, C:100,L:50,X:10,V:5,I : 1,S:0.5,}
console.log(numberList.C,numberList.D)
console.log(numberList.S+numberList.I)
for (let i in numberList){
    console.log(numberList[i])
    
}

// 1- inputu alacagiz , for i ile aldigimiz inputu ister if input > numberList.i ise input / yada % olacak bakariz
// 2- kalani bu sefer d ye boldurcez , o sekilde gidecek
// 3- sayi sifir olursa ona ayri esitlik lazim
// 4- roma sayisin cevirirkende split ile parcalayip degerine gore carpip toplariz counter eklemek gerekebilir her ikisinede