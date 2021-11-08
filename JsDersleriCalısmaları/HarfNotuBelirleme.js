let girilenSayi = parseInt(prompt("lütfen bir sayi giriniz : 45"));
let enyüksekharfNotu =`AA` 
let ikinciEnyüksekSayi = `BB`
let ucuncuNot = `CC`
let sonNot = `DD`
if (girilenSayi >= 80 && girilenSayi <=100 ){
    console.log(`En yüksek notu aldınız : ${enyüksekharfNotu}`);
}
else if (girilenSayi <80 && girilenSayi >=50){
    console.log(`İkinci  notu aldınız : ${ikinciEnyüksekSayi}`);
}
else if (girilenSayi<50 && girilenSayi >=30 ) {
    console.log(`üçüncü  notu aldınız : ${ucuncuNot}`);
} 
else if (girilenSayi < 30 ){
    console.log(`Kardeşim en düşük notu almışsın : ${sonNot} `);
} 
else {
    console.log("HATALI GİRİŞ YAPTINIZ !!!");
}
