AOS.init();

const dataPromo = new Date("Dec 21, 2025 23:59:59");
const timesTempDaPromo = dataPromo.getTime();

const contaHora = setInterval(function (){
    const agora = new Date();
    const timesTempAtual = agora.getTime();

    const tempoRestante = timesTempDaPromo - timesTempAtual;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = "A KINGS LEAGUE INICIA EM: " + dias + " Dias " + horas + " h " + minutos + " m " + segundos + " s ";
}, 1000)