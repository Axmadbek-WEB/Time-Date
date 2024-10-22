// // let tim = new Date();
// let pt = new Date();
// let hour = pt.getHours();
// let minut = pt.getMinutes();
// let second = pt.getSeconds();

// // function hi(){
// //     console.log("Salom ");
// // }
// // setTimeout(hi, 5000);
// // setInterval(hi, 5000);

// console.log(pt);

const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")


let presentTime = new Date();
let soat = presentTime.getHours();
let minut = presentTime.getMinutes();
let sekund = presentTime.getSeconds();



hour.textContent = soat;
min.textContent = minut;
sec.textContent = sekund;

function clock() {
    if (+sec.textContent == 60) {
        min.textContent = +min.textContent + 1;
        sec.textContent = 0
    } if (+min.textContent == 60) {
        hour.textContent = +hour.textContent + 1;
        min.textContent = 0
    }
    if(+hour == 24){
        hour.textContent = 0;
    }
    sec.textContent++
    if(min == 60){
        min.style="box-shadow: 0px 0px 100px 20px #fff;"
    }
}

setInterval(clock, 1000);