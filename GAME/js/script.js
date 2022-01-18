const awan = document.querySelectorAll('.awan');
const usop = document.querySelectorAll('.usop');
const skor = document.querySelector('.skor');



let awanSebelumnya;
let selesai ;
let poin ;

function randomAwan(awan) {
    const a = Math.floor(Math.random() * awan.length);
    const aRandom = awan[a];
    if (aRandom == awanSebelumnya){
        randomAwan(awan);
}
awanSebelumnya = aRandom;
    return aRandom;

}

function randomWaktu(min,max) {
    return Math.round(Math.random() * (max - min) + min);
    
}

function munculkanUsop() {
    const aRandom = randomAwan(awan);
    const wRandom = randomWaktu(300,500);
    aRandom.classList.add('muncul');

    setTimeout(() => {
        aRandom.classList.remove('muncul');  
       if (!selesai) {
           munculkanUsop(); 
       }
    },wRandom);
    
}

function start() {
    selesai= false;
    poin =0;
    skor.textContent = 0;
    munculkanUsop();
    setTimeout(() => {
        selesai = true;
        
    },10000);
    
}

function pukul() {
    poin++;
    skor.textContent = poin;
    this.parentNode.classList.remove('muncul');
    
}

usop.forEach(a => {
   a.addEventListener('click',pukul);
    
});