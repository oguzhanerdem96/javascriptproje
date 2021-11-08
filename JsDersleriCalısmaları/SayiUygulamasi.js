let UretilenSayi = (Math.random()*90) +10 ;
let KullanıcıSayisi = parseInt (prompt ("LÜTFEN İKİ BASAMAKLI BİR SAYI GİRİNİZ ÖRN : 59"));
 UretilenSayi = Math.floor(UretilenSayi);
console.log(`Sistemin Ürettiği Sayı : ${UretilenSayi} kullanıcının girdiği sayı : ${KullanıcıSayisi}` );
let UretilenSayininBirlerBasamagi = UretilenSayi % 10 ;
let UretilenSayisininOnlarBasamagi = Math.floor(UretilenSayi / 10) ;
console.log(`Uretilen Sayinin Birler Basamagi : ${UretilenSayininBirlerBasamagi} onlar basamagi : ${UretilenSayisininOnlarBasamagi}`);
let KullanicininSayininBirlerBasamagi = KullanıcıSayisi % 10 ;
let KullanicininSayisininOnlarBasamagi = Math.floor(KullanıcıSayisi / 10) ;
console.log(`Kullanıcının Sayinin Birler Basamagi : ${KullanicininSayininBirlerBasamagi} onlar basamagi : ${UretilenSayisininOnlarBasamagi}`);
if (UretilenSayi===KullanıcıSayisi){
    console.log("Tebrikler 10000 TL. para ödülü kazandınız Tahmininiz : " + KullanıcıSayisi +" Üretilen sayı :" + UretilenSayi ) 
}
else if (UretilenSayininBirlerBasamagi===KullanicininSayisininOnlarBasamagi && UretilenSayisininOnlarBasamagi===KullanicininSayininBirlerBasamagi) {
    console.log("Tebrikler 5000 TL. para ödülü kazandınız Tahmininiz : " + KullanıcıSayisi +" Üretilen sayı :" + UretilenSayi );
}else if (UretilenSayininBirlerBasamagi ===KullanicininSayininBirlerBasamagi || UretilenSayisininOnlarBasamagi===KullanicininSayisininOnlarBasamagi) {
    console.log("Tebrikler 1000 TL. para ödülü kazandınız Tahmininiz : " + KullanıcıSayisi +" Üretilen sayı :" + UretilenSayi )
}  
else{
    console.log("Maalesef bir şey kazanamadınız  Tahmininiz : " + KullanıcıSayisi +" Üretilen sayı :" + UretilenSayi )
}

    




