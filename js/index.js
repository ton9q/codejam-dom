/* POPUP WINDOW */
const delayPopup = 5000;

if (sessionStorage.getItem('disableTips') === null) {
  sessionStorage.setItem('disableTips', 'false');
}

function elementToBlock() {
  document.getElementById('overlay').style.display = 'block';
}

function close() {
  document.getElementById('overlay').style.display = 'none';

  if (document.getElementById('tips').checked) {
    sessionStorage.setItem('disableTips', 'true');
  }
}

if (sessionStorage.getItem('disableTips') === 'false') {
  setTimeout(elementToBlock, delayPopup);
}

document.getElementById('close').addEventListener('click', close);

/* SLIDER */
const dots = [...document.getElementById('dots').children];
const slides = [...document.getElementById('slides').children];
let thisSlide = 0;

dots.forEach((item, id) => {
  item.addEventListener('click', () => {
    dots.forEach((dot, index) => {
      slides.forEach((slide, indexSlide) => {
        if (indexSlide === id) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });

      if (index === id) {
        dot.style.backgroundColor = '#22EFF1'; // 'rgb(34, 239, 241);
        thisSlide = index;
      } else {
        dot.style.backgroundColor = 'white';
      }
    });
  });
});

/* NEXT SLIDE */
function next() {
  const nextSlide = thisSlide === dots.length - 1 ? 0 : thisSlide + 1;

  slides.forEach((slide, indexSlide) => {
    if (indexSlide === nextSlide) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  dots.forEach((dot, index) => {
    if (index === nextSlide) {
      dot.style.backgroundColor = '#22EFF1'; // 'rgb(34, 239, 241);
      thisSlide = nextSlide;
    } else {
      dot.style.backgroundColor = 'white';
    }
  });
}

document.getElementById('next').addEventListener('click', next);

/* PREVIOUS SLIDE */
function prev() {
  const prevSlide = thisSlide === 0 ? dots.length - 1 : thisSlide - 1;

  slides.forEach((slide, indexSlide) => {
    if (indexSlide === prevSlide) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  dots.forEach((dot, index) => {
    if (index === prevSlide) {
      dot.style.backgroundColor = '#22EFF1'; // 'rgb(34, 239, 241);
      thisSlide = prevSlide;
    } else {
      dot.style.backgroundColor = 'white';
    }
  });
}

document.getElementById('prev').addEventListener('click', prev);

/* KEYBOARD INPUT */
function listenKeyboard(event) {
  switch (event.keyCode) {
    case 37:
      prev();
      break;
    case 39:
      next();
      break;
    case 27:
      close();
      break;
    default:
      break;
  }
}

document.onkeydown = listenKeyboard;
