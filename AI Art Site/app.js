const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})


window.onload = () => {
    const textHighlight = document.querySelector('.text-highlight');
    const textChars = textHighlight.textContent.split('');
    
    
    textHighlight.innerHTML = '';
    textChars.forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      textHighlight.appendChild(span);
    });
    
    
    const textSpans = textHighlight.querySelectorAll('span');
    textSpans.forEach(span => {
      span.style.opacity = 0;
      span.style.transform = 'translateY(100%)';
    });
    
    
    let index = 0;
    const interval = setInterval(() => {
      const span = textSpans[index];
      span.style.opacity = 1;
      span.style.transform = 'translateY(0)';
      index++;
      if (index === textSpans.length) {
        clearInterval(interval);
      }
    }, 35);

};

const mainImg = document.querySelector('#main__img');
window.addEventListener('load', () => {
  setTimeout(() => {
    mainImg.classList.add('show');
  }, 500);
});

