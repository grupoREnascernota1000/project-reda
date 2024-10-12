// Seleciona todas as perguntas
const faqQuestions = document.querySelectorAll('.faq-question');

// Adiciona um evento de clique a cada pergunta
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Alterna a exibição da resposta correspondente
        const answer = question.nextElementSibling; // Seleciona a resposta que está logo após a pergunta
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const promoDuration = 15 * 24 * 60 * 60 * 1000; // 15 dias em milissegundos
    const promoStartDate = new Date("2024-10-01"); // Data de início da promoção
    const promoEndDate = new Date(promoStartDate.getTime() + promoDuration);
    const currentDate = new Date();

    if (currentDate >= promoStartDate && currentDate <= promoEndDate) {
        document.getElementById('services').classList.add('promo-active');
    } else {
        document.getElementById('services').classList.remove('promo-active');
    }
});

// Função para o cronômetro
const countdownDate = new Date("Oct 26, 2024 23:59:59").getTime();

const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "Promoção Expirada";
    }
}, 1000);


