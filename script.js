const panos = document.querySelector("#panos");
const saldo = 50;

const pv = document.querySelector("#punajuurivoitto");
const sv = document.querySelector("#sitruunavoitto");
const av = document.querySelector("#appelsiinivoitto");
const bv = document.querySelector("#banaanivoitto");
const vv = document.querySelector("#vesimelonivoitto");


function panos1() {
    if (saldo >= 1) {
        let panosNyt = 1;
        panos.innerHTML=panosNyt;

        pv.innerHTML=panosNyt*2;
        sv.innerHTML=panosNyt*4
        av.innerHTML=panosNyt*6;
        bv.innerHTML=panosNyt*8;
        vv.innerHTML=panosNyt*10;
    }
}

function panos2() {
    if (saldo >= 2) {
        let panosNyt = 2;
        panos.innerHTML=panosNyt;

        pv.innerHTML=panosNyt*2;
        sv.innerHTML=panosNyt*4
        av.innerHTML=panosNyt*6;
        bv.innerHTML=panosNyt*8;
        vv.innerHTML=panosNyt*10;
    }
}

function panos5() {
    if (saldo >= 5) {
        let panosNyt = 5;
        panos.innerHTML=panosNyt;

        pv.innerHTML=panosNyt*2;
        sv.innerHTML=panosNyt*4
        av.innerHTML=panosNyt*6;
        bv.innerHTML=panosNyt*8;
        vv.innerHTML=panosNyt*10;
    }
}

function pelaa() {
    if (saldo < 1) {
        alert('Rahat loppuivat!');
        document.querySelector("#pelaa").disabled = true;
    } else {

    }
}
