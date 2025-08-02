// Seleciona os elementos
const menuMobile = document.querySelector('.menu-mobile');
const btnFechar = document.querySelector('.btn-fechar');
const btnAbrir = document.querySelector('.btn-abrir-menu');

// Função para abrir o menu
function abrirMenu() {
    menuMobile.style.display = 'block';
    btnFechar.style.display = 'block';
    document.body.classList.add('menu-aberto'); // impede rolagem
}

// Função para fechar o menu
function fecharMenu() {
    menuMobile.style.display = 'none';
    btnFechar.style.display = 'none';
    document.body.classList.remove('menu-aberto'); // permite rolagem
}

// Adiciona os listeners de clique
btnAbrir.addEventListener('click', abrirMenu);
btnFechar.addEventListener('click', fecharMenu);

// Fecha o menu ao clicar em qualquer link dentro dele
document.querySelectorAll('.menu-mobile nav a').forEach(link => {
    link.addEventListener('click', () => {
        fecharMenu();
    });
});

// Adicionando rolagem suave para todos os links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
