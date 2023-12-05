function typeWriterEffect(text, element, speed) {
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
    }
  }, speed);
}

const introducaoTexto = document.querySelector('.secao.introducao .textoDigitado');

typeWriterEffect('Olá, meu nome é Júlio!', introducaoTexto, 100);



// Funções para o Modal do Email
function openEmailModal() {
  document.getElementById('modalEmail').style.display = 'block';
}

function closeEmailModal() {
  document.getElementById('modalEmail').style.display = 'none';
}

