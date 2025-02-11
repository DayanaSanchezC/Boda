// Establece la fecha de destino para la cuenta regresiva
const countDownDate = new Date("Jun 28, 2025 00:00:00").getTime();

// Actualiza la cuenta regresiva cada 1 segundo
const countdownFunction = setInterval(function() {

    // Obtén la fecha y hora actuales
    const now = new Date().getTime();

    // Calcula la diferencia entre la fecha de destino y la actual
    const distance = countDownDate - now;

    // Cálculos de tiempo para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en los elementos con id correspondientes
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown-container").innerHTML = '<p class="end-message">¡El comienzo de nuestro "felices para siempre" empieza ahora!</p>';
    }
}, 1000);
