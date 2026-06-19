// 1. Menu Mobile (Toggle)
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    // Alterna a classe 'ativo' para mostrar/esconder o menu no celular
    navLinks.classList.toggle('ativo');
    
    // Troca o ícone de Hambúrguer para X
    if (navLinks.classList.contains('ativo')) {
        menuToggle.innerHTML = '✕';
    } else {
        menuToggle.innerHTML = '☰';
    }
});

// 2. Banner de Cookies (LGPD)
const cookieBanner = document.getElementById('cookie-banner');
const btnEntendi = document.getElementById('btn-entendi');

btnEntendi.addEventListener('click', () => {
    // Quando o usuário clica em "OK, ENTENDI", o banner some da tela
    cookieBanner.style.display = 'none';
});