const botao = document.querySelector('.botao-menu');
const menuLateral = document.querySelector('.menu-lateral');
const conteudo = document.querySelector('.conteudo');
const background = document.querySelector('.background');
const menuLinks = document.querySelectorAll('.menu-link');
const secoesConteudo = document.querySelectorAll('.secao-conteudo');

botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo');
    botao.classList.toggle('ativo');
    conteudo.classList.toggle('ativo');
    background.classList.toggle('ativo');
    
    if (menuLateral.classList.contains('ativo')) {
        document.body.style.backgroundColor = '#34495e';
        conteudo.style.backgroundColor = '#34495e';
    } else {
        document.body.style.backgroundColor = '#ecf0f1';
        conteudo.style.backgroundColor = '#ecf0f1';
    }
});

background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
    botao.classList.remove('ativo');
    conteudo.classList.remove('ativo');
    background.classList.remove('ativo');
    document.body.style.backgroundColor = '#ecf0f1';
    conteudo.style.backgroundColor = '#ecf0f1';
});

menuLinks.forEach(link => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault(); 
        
        const idDaSecao = link.getAttribute('href'); 

        secoesConteudo.forEach(secao => {
            secao.classList.remove('ativo');
        });

        document.querySelector(idDaSecao).classList.add('ativo');

        menuLateral.classList.remove('ativo');
        botao.classList.remove('ativo');
        conteudo.classList.remove('ativo');
        background.classList.remove('ativo');
        document.body.style.backgroundColor = '#ecf0f1';
        conteudo.style.backgroundColor = '#ecf0f1';
    });
});