const start = document.getElementById("start");
const reset = document.getElementById("reset");
const cronometro = document.getElementsByClassName("timer");
const minutos = document.getElementById("minutes");
const minutosEmSegundos = Number(minutos.textContent) * 60;
const segundos = document.getElementById("seconds");
let tempoRestante = minutosEmSegundos;
let intervalo = null;

function atualizarCronometro() {
  const minutosRestantes = Math.floor(tempoRestante / 60);
  const segundosRestantes = tempoRestante % 60;

  minutos.textContent = String(minutosRestantes).padStart(2, "0");
  segundos.textContent = String(segundosRestantes).padStart(2, "0");

  console.log(minutosRestantes);
  console.log(segundosRestantes);
}

function iniciarCronometro() {
  if (intervalo != null) {
    return;
  }

  intervalo = setInterval(() => {
    tempoRestante--;
    atualizarCronometro();
  }, 1000);
}

start.addEventListener("click", iniciarCronometro);
