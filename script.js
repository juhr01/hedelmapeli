let panosTeksti = document.querySelector("#panosTeksti");
let rahaTeksti = document.querySelector("#rahaTeksti");
let saldo = 50;
let panos = 1;

let lukitseminen = false;

let lukko1 = false;
let lukko2 = false;
let lukko3 = false;
let lukko4 = false;

const pv = document.querySelector("#punajuurivoitto");
const sv = document.querySelector("#sitruunavoitto");
const av = document.querySelector("#appelsiinivoitto");
const bv = document.querySelector("#banaanivoitto");
const vv = document.querySelector("#vesimelonivoitto");


function asetaPanos(x) {
    if (saldo >= x) {
        panos = x;
        panosTeksti.innerHTML = panos;


        pv.innerHTML = panos * 2;
        sv.innerHTML = panos * 4;
        av.innerHTML = panos * 6;
        bv.innerHTML = panos * 8;
        vv.innerHTML = panos * 10;
    }
}


function pelaa() {
    if (saldo < 1) {
        document.querySelector("#pelaa").remove();
        alert('Rahat loppuivat!');
    } else if (saldo < panos) {
        alert('Panos on liian suuri!');
    } else {
        saldo = saldo - panos;
        rahaTeksti.innerHTML = saldo;

        if (lukko1 == true || lukko2 == true || lukko3 == true || lukko4 == true) {
            lukitseminen = true;
        } else {
            lukitseminen = false;
        }

        if (lukko1 = false) {
            vaihdaKuva("rulla1");
        }
        if (lukko2 = false) {
            vaihdaKuva("rulla2");
        }
        if (lukko3 = false) {
            vaihdaKuva("rulla3");
        }
        if (lukko4 = false) {
            vaihdaKuva("rulla4");
        }

        tarkistaVoitto();

        lukko1 = false;
        lukko2 = false;
        lukko3 = false;
        lukko4 = false;


    }
}

function vaihdaKuva(rulla) {
    let image = "";
    randInt = Math.floor((Math.random() * 5) + 1);
    console.log(randInt);

    switch (randInt) {
        case 1:
            image = "kuvat/munajuuri.png";
            break;
        case 2:
            image = "kuvat/sitruuna.png";
            break;
        case 3:
            image = "kuvat/abelsin.png";
            break;
        case 4:
            image = "kuvat/banan.png";
            break;
        case 5:
            image = "kuvat/mesiveloni.png"
            break;
    }


    document.getElementById(rulla).src = image;
}

function tarkistaVoitto() {
    const kuva1 = document.getElementById("rulla1").src;
    const kuva2 = document.getElementById("rulla2").src;
    const kuva3 = document.getElementById("rulla3").src;
    const kuva4 = document.getElementById("rulla4").src;

    if (kuva1 == kuva2 && kuva2 == kuva3 && kuva3 == kuva4) {
        const tiedostoNimi = kuva1.split('/').pop();
        switch (tiedostoNimi) {
            case "munajuuri.png":
                saldo = saldo + panos * 2;
                break;
            case "sitruuna.png":
                saldo = saldo + panos * 4;
                break;
            case "abelsin.png":
                saldo = saldo + panos * 6;
                break;
            case "banan.png":
                saldo = saldo + panos * 8;
                break;
            case "vesimeloni.png":
                saldo = saldo + panos * 10;
                break;

        }
        rahaTeksti.innerHTML = saldo;
    }
}

function lukitus(rullaNumero) {
    switch (rullaNumero) {
        case 1:
            if (lukko1 == true) {
                lukko1 == false;

                const kuva1 = document.getElementById("rulla1").src;
                const tiedostoNimi = kuva1.split('/').pop();
                switch (tiedostoNimi) {
                    case "munajuurilukittu.png":
                        document.getElementById("rulla1").src = "kuvat/munajuuri.png";
                        break;
                    case "sitruunalukittu.png":
                        document.getElementById("rulla1").src = "kuvat/sitruuna.png";
                        break;
                    case "abelsinlukittu.png":
                        document.getElementById("rulla1").src = "kuvat/abelsin.png";
                        break;
                    case "bananlukittu.png":
                        document.getElementById("rulla1").src = "kuvat/banan.png";
                        break;
                    case "mesivelonilukittu.png":
                        document.getElementById("rulla1").src = "kuvat/mesiveloni.png";
                        break;

                }

            } else {
                lukko1 = true;

                const kuva1 = document.getElementById("rulla1").src;
                const tiedostoNimi = kuva1.split('/').pop();
                switch (tiedostoNimi) {
                    case "munajuuri.png":
                        document.getElementById("rulla1").src = "kuvat/munajuurilukittu.png";
                        break;
                    case "sitruuna.png":
                        document.getElementById("rulla1").src = "kuvat/sitruunalukittu.png";
                        break;
                    case "abelsin.png":
                        document.getElementById("rulla1").src = "kuvat/abelsinlukittu.png";
                        break;
                    case "banan.png":
                        document.getElementById("rulla1").src = "kuvat/bananlukittu.png";
                        break;
                    case "mesiveloni.png":
                        document.getElementById("rulla1").src = "kuvat/mesivelonilukittu.png";
                        break;
                }
            }

            case 2:
            if (lukko2 == true) {
                lukko2 == false;

                const kuva1 = document.getElementById("rulla2").src;
                const tiedostoNimi = kuva1.split('/').pop();
                switch (tiedostoNimi) {
                    case "munajuurilukittu.png":
                        document.getElementById("rulla2").src = "kuvat/munajuuri.png";
                        break;
                    case "sitruunalukittu.png":
                        document.getElementById("rulla2").src = "kuvat/sitruuna.png";
                        break;
                    case "abelsinlukittu.png":
                        document.getElementById("rulla2").src = "kuvat/abelsin.png";
                        break;
                    case "bananlukittu.png":
                        document.getElementById("rulla2").src = "kuvat/banan.png";
                        break;
                    case "mesivelonilukittu.png":
                        document.getElementById("rulla2").src = "kuvat/mesiveloni.png";
                        break;

                }

            } else {
                lukko2 = true;

                const kuva1 = document.getElementById("rulla2").src;
                const tiedostoNimi = kuva1.split('/').pop();
                switch (tiedostoNimi) {
                    case "munajuuri.png":
                        document.getElementById("rulla2").src = "kuvat/munajuurilukittu.png";
                        break;
                    case "sitruuna.png":
                        document.getElementById("rulla2").src = "kuvat/sitruunalukittu.png";
                        break;
                    case "abelsin.png":
                        document.getElementById("rulla2").src = "kuvat/abelsinlukittu.png";
                        break;
                    case "banan.png":
                        document.getElementById("rulla2").src = "kuvat/bananlukittu.png";
                        break;
                    case "mesiveloni.png":
                        document.getElementById("rulla1").src = "kuvat/mesivelonilukittu.png";
                        break;
                }
            }

            case 3:
            if (lukko3 == true) {
                lukko3 == false;

                const kuva1 = document.getElementById("rulla3").src;
                const tiedostoNimi = kuva1.split('/').pop();
                switch (tiedostoNimi) {
                    case "munajuurilukittu.png":
                        document.getElementById("rulla3").src = "kuvat/munajuuri.png";
                        break;
                    case "sitruunalukittu.png":
                        document.getElementById("rulla3").src = "kuvat/sitruuna.png";
                        break;
                    case "abelsinlukittu.png":
                        document.getElementById("rulla3").src = "kuvat/abelsin.png";
                        break;
                    case "bananlukittu.png":
                        document.getElementById("rulla3").src = "kuvat/banan.png";
                        break;
                    case "mesivelonilukittu.png":
                        document.getElementById("rulla3").src = "kuvat/mesiveloni.png";
                        break;

                }

            } else {
                lukko3 = true;

                const kuva1 = document.getElementById("rulla3").src;
                const tiedostoNimi = kuva1.split('/').pop();
                switch (tiedostoNimi) {
                    case "munajuuri.png":
                        document.getElementById("rulla3").src = "kuvat/munajuurilukittu.png";
                        break;
                    case "sitruuna.png":
                        document.getElementById("rulla3").src = "kuvat/sitruunalukittu.png";
                        break;
                    case "abelsin.png":
                        document.getElementById("rulla3").src = "kuvat/abelsinlukittu.png";
                        break;
                    case "banan.png":
                        document.getElementById("rulla3").src = "kuvat/bananlukittu.png";
                        break;
                    case "mesiveloni.png":
                        document.getElementById("rulla3").src = "kuvat/mesivelonilukittu.png";
                        break;
                }
            }

            case 4:
            if (lukko4 == true) {
                lukko4 == false;

                const kuva1 = document.getElementById("rulla4").src;
                const tiedostoNimi = kuva1.split('/').pop();
                switch (tiedostoNimi) {
                    case "munajuurilukittu.png":
                        document.getElementById("rulla4").src = "kuvat/munajuuri.png";
                        break;
                    case "sitruunalukittu.png":
                        document.getElementById("rulla4").src = "kuvat/sitruuna.png";
                        break;
                    case "abelsinlukittu.png":
                        document.getElementById("rulla4").src = "kuvat/abelsin.png";
                        break;
                    case "bananlukittu.png":
                        document.getElementById("rulla4").src = "kuvat/banan.png";
                        break;
                    case "mesivelonilukittu.png":
                        document.getElementById("rulla4").src = "kuvat/mesiveloni.png";
                        break;

                }

            } else {
                lukko4 = true;

                const kuva1 = document.getElementById("rulla4").src;
                const tiedostoNimi = kuva1.split('/').pop();
                switch (tiedostoNimi) {
                    case "munajuuri.png":
                        document.getElementById("rulla4").src = "kuvat/munajuurilukittu.png";
                        break;
                    case "sitruuna.png":
                        document.getElementById("rulla4").src = "kuvat/sitruunalukittu.png";
                        break;
                    case "abelsin.png":
                        document.getElementById("rulla4").src = "kuvat/abelsinlukittu.png";
                        break;
                    case "banan.png":
                        document.getElementById("rulla4").src = "kuvat/bananlukittu.png";
                        break;
                    case "mesiveloni.png":
                        document.getElementById("rulla4").src = "kuvat/mesivelonilukittu.png";
                        break;
                }
            }
        break;
    }
}