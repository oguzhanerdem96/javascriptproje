let girilenSayi = parseInt(prompt("lütfen bir sayi giriniz örn : 10 "));
let gosterelicekMetin = " "
for(let i =2 ; i <= girilenSayi ; i++){
    Asalsayimi = true;


for(let j=2 ; j<i  ; j++){
   if(i % j == 0 ){
    Asalsayimi = false ;
    break ;
}
} if(Asalsayimi == true){
gosterelicekMetin = gosterelicekMetin + i + " " 
}
}
console.log(gosterelicekMetin); 