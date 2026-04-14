// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Navbar Scroll Effect (Glassmorphism transition)
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('py-2', 'bg-surface-darker/95');
        navbar.classList.remove('py-4', 'bg-surface-dark/95');
    } else {
        navbar.classList.add('py-4', 'bg-surface-dark/95');
        navbar.classList.remove('py-2', 'bg-surface-darker/95');
    }
});

// Scroll Reveal Animations
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120; // Ponto de gatilho mais sutil

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Trigger initial

// Lógica Formulário WhatsApp
document.getElementById('formAgendamento').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const dataInput = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const obs = document.getElementById('obs').value.trim();

    const dataPartes = dataInput.split('-');
    const dataFormatada = `${dataPartes[2]}/${dataPartes[1]}/${dataPartes[0]}`;

    const numeroWhatsApp = "5511999999999";

    let mensagem = `🔥 *BORA TREINAR!* 🔥\n\n`;
    mensagem += `Olá, Guerreiro Cross! Quero agendar minha aula experimental. Seguem meus dados:\n\n`;
    mensagem += `👤 *Nome:* ${nome}\n`;
    mensagem += `📱 *Telefone:* ${telefone}\n`;
    mensagem += `📅 *Data:* ${dataFormatada}\n`;
    mensagem += `⏰ *Turma:* ${horario}\n`;

    if (obs) {
        mensagem += `\n📝 *Detalhes:* ${obs}\n`;
    }

    const urlEncodedMessage = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${urlEncodedMessage}`;

    window.open(urlWhatsApp, '_blank');
});

// Block past dates on datepicker
const dataInputForm = document.getElementById('data');
const hoje = new Date().toISOString().split('T')[0];
dataInputForm.setAttribute('min', hoje);
