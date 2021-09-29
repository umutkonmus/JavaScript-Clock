var saat , dakika , saniye = 0;
var akrepAci = 0 , yelkovanAci = 0, saniyeAci = 0;
var akrepSonAci , yelkovanSonAci, saniyeSonAci;
var akrepHiz = 1 , yelkovanHiz = 1;

function akrepDondur(){
    const akrep = document.querySelector('#akrep');
    akrepReady = setInterval(function akrepGo(){
        if(akrepAci >= akrepSonAci){
            clearInterval(akrepReady);
            akrepHiz = 0.1;
        }else{akrepAci += akrepHiz;}
        akrep.style.transform = "rotate(" + akrepAci + "deg)";
        akrepSonAci = saat*30;
        if(akrepSonAci > 360){
            akrepSonAci -= 360;
        }
    },50)
}

function yelkovanDondur(){
    const yelkovan = document.querySelector('#yelkovan');
    yelkovanReady = setInterval(function yelkovanGo(){
        if(yelkovanAci >= yelkovanSonAci){
            clearInterval(yelkovanReady);
            yelkovanHiz = 0.1;
            getDate();
        }else{yelkovanAci += 1;}
        yelkovan.style.transform = "rotate(" + yelkovanAci + "deg)";
        yelkovanSonAci = dakika * 6;
    },50)
}

function saniyeDondur(){
    const elSaniye = document.querySelector('#saniye');
    saniyeReady = setInterval(function saniyeGo(){
        saniyeAci = saniye * 6;
        elSaniye.style.transform = "rotate(" + saniyeAci + "deg)";
    },100);
}



function getDate(){
    const now   = new Date();
    dakika  = now.getMinutes();
    saat    = now.getHours();
    saniye  = parseInt(now.getSeconds());
    saniyeDondur();
    yelkovanDondur();
    akrepDondur();
}
// Tamamen yüklendikten sonra çalışacak
window.addEventListener('load', (event) => {
    getDate();
  });

