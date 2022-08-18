function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 300 * i);
        });
    }
const titulo = document.querySelector('.title');
typeWriter(titulo);


const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('#head1', { delay: 200 });
ScrollReveal().reveal('#head2', { delay: 200 });
ScrollReveal().reveal('#head3', { delay: 200 });
ScrollReveal().reveal('#head4', { delay: 200 });