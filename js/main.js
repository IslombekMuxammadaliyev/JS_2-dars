/*
let a = 44;
let b = 43;
if (a == b){
    console.log("a qiymati 44dan katta yoki teng")
}
else {
    console.log("a ning qiymati ko'rsatilgan sondan katta yoki teng emas!")
}*/
/*let a=10;
let b=46;
let c=50;
let d=55;*/

/*if (a == 45 && b == 30 && c == 12 && d == 41){
    console.log("Shartlari hammasi bajarildi")
}
else {
    console.log("Shartlari kamida bittasi ishlamayapti")
}*/
/*if (a == 10|| b == 46 || c == 50 || d == 55){
    console.log("Shartlardan kamida bitasi bajarildi")
}
else {
    console.log("Shartlarning hammasi bajarilmadi")
}*/
/* JS data types: undefined, boolean, object */

/*let soz= "text";
let son= 49;
let matn;*/
/*let rost= 45==45?true:false;*/

/*if (45 == 45){
    document.write(true)
else {
   document.write(false)
}*/
}
let arrayObject = [45,78,"text","matn",true,false]
let oddiyObject = {ismi:"Navruz",familiyasi:"Malikov", yoshi: 16, manzili:"Yangihayot"}
let oqiydimi = "H, oqiydi";
if (oddiyObject.yoshi > 15){
    oqiydimi = "Yo'q, oqimiydi"
}

console.log("Navruz oquvchimi? " + oqiydimi)