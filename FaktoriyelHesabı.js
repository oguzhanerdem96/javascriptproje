let GirilenSayi = parseInt(prompt("lütfen bir sayı giriniz : 10 "));
let faktoriyel = 1 ;
for (i = 1 ; i <= GirilenSayi ; i++){
    faktoriyel = faktoriyel * i ;

}
console.log(`Girdiğiniz "${GirilenSayi}" sayısının Faktoriyeli "${faktoriyel}" dir.`);