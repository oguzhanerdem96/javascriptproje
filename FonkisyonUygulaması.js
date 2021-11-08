let x =parseInt(prompt("lütfen x değeri giriniz : "));
let y =parseInt(prompt("lütfen y değeri giriniz :"));
let ilkDurumFonksiyon = (4*x + 2*y + 4 ) ;
let ikinciDurumFonksiyon = (2*x - y + 3);
let ucuncuDurumFonksiyon = (3 * x + 4 * y + 3 );
if (x>0 && y<0){
console.log(`Girdiğiniz degere göre calısan 1. fonskiyon : ${ilkDurumFonksiyon} `);
} 
else if (x>0 && y==0){
    console.log(`Girdiğiniz degere göre calısan 2. fonskiyon : ${ikinciDurumFonksiyon} `);
}
else if (x<0 && y>0 ){
    console.log(`Girdiğiniz degere göre calısan 3. fonskiyon : ${ucuncuDurumFonksiyon} `);
}
else {
    console.log("hatalı giriş yaptınız ");
}