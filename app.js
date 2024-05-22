const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.classList.add('width-logo');
  } else {
    nav.classList.remove('width-logo');
  }
});

// let faqs = document.getElementsByClassName("faq");
// faqs.forEach(faq => {
//   faq.addEventListener('click', ()=>{
//     faq.classList.toggle('active')
//   })
// });


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  let sides = document.getElementsByClassName("side");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  for (i = 0; i < sides.length; i++) {
    sides[i].className = sides[i].className.replace(" actives", "");
  }
  sides[slideIndex-1].className += " actives";
}


let slideIndix = 1;
showSlide(slideIndix);

// Next/previous controls
function plusSlide(n) {
  showSlide(slideIndix += n);
}

// Thumbnail image controls
function currentSlid(n) {
  showSlide(slideIndix = n);
}

function showSlide(n) {
  let i;
  let slide = document.getElementsByClassName("mySlide");
  let span = document.getElementsByClassName("spaan");
  if (n > slide.length) {slideIndix = 1}
  if (n < 1) {slideIndix = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndix-1].style.display = "block";

  
}
let slideIndx = 1;
showSlid(slideIndx);

// Next/previous controls
function plusSlidee(n) {
  showSlid(slideIndx += n);
}

// Thumbnail image controls
function currentSlidee(n) {
  showSlid(slideIndx = n);
}

function showSlid(n) {
  let i;
  let slides = document.getElementsByClassName("mySlid");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndx = 1}
  if (n < 1) {slideIndx = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndx-1].style.display = "block";
  dots[slideIndx-1].className += " active";
}

let slideIndeex = 1;
showSlid_2(slideIndeex);

// Next/previous controls
function plusSlid(n) {
  showSlid_2(slideIndeex += n);
}

// Thumbnail image controls
function currentSlid(n) {
  showSlid_2(slideIndeex = n);
}

function showSlid_2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlid_2");
  let dotss = document.getElementsByClassName("dot_2");
  if (n > slides.length) {slideIndeex = 1}
  if (n < 1) {slideIndeex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dotss.length; i++) {
    dotss[i].className = dotss[i].className.replace(" active", "");
  }
  slides[slideIndeex-1].style.display = "block";
  dotss[slideIndeex-1].className += " active";
}
let slideIndxx = 1;
showSlid_3(slideIndxx);

// Next/previous controls
// function plusSlid(n) {
//   showSlid_3(slideIndxx += n);
// }

// Thumbnail image controls
function currentSlid_3(n) {
  showSlid_3(slideIndxx = n);
}

function showSlid_3(n) {
  let i;
  let slid = document.getElementsByClassName("mySlid_3");
  let dots_3 = document.getElementsByClassName("dot_3");
  if (n > slid.length) {slideIndxx = 1}
  if (n < 1) {slideIndxx = slid.length}
  for (i = 0; i < slid.length; i++) {
    slid[i].style.display = "none";
  }
  for (i = 0; i < dots_3.length; i++) {
    dots_3[i].className = dots_3[i].className.replace(" active", "");
  }
  slid[slideIndxx-1].style.display = "block";
  dots_3[slideIndxx-1].className += " active";
}

// scripts.js
// document.addEventListener('DOMContentLoaded', () => {
//   const faqItems = document.querySelectorAll('.faq-item');

//   faqItems.forEach(item => {
//       const question = item.querySelector('.question');
//       const answer = item.querySelector('.answer');

//       question.addEventListener('click', () => {
//           const currentlyOpen = document.querySelector('.faq-item .answer:not([style*="display: none"])');
//           if (currentlyOpen && currentlyOpen !== answer) {
//               currentlyOpen.style.display = 'none';
//           }
//           answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
//       });
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const question = item.querySelector('.question');
      const answer = item.querySelector('.answer');
      const icon = item.querySelector('.faa');

      question.addEventListener('click', () => {
          const isOpen = answer.style.display === 'block';
          
          // Close all answers
          // document.querySelectorAll('.answer').forEach(ans => ans.style.display = 'none');
          // document.querySelectorAll('.icon').forEach(icn => icn.textContent = '+');

          // if (isOpen) {
          //     answer.style.display = 'none';
          //     icon.textContent = '+';
          // } else {
          //     answer.style.display = 'block';
          //     icon.textContent = '-';
          // }
          document.querySelectorAll('.answer').forEach(ans => ans.style.display = 'none');
          document.querySelectorAll('.faa').forEach(icn => {
              icn.classList.remove('fa-minus');
              icn.classList.add('fa-plus');
          });

          if (isOpen) {
              answer.style.display = 'none';
              icon.classList.remove('fa-minus');
              icon.classList.add('fa-plus');
          } else {
              answer.style.display = 'block';
              icon.classList.remove('fa-plus');
              icon.classList.add('fa-minus');
          }
      });
  });
});

let nav1 = document.querySelector("nav");

window.onscroll = function () {
    if (this.scrollY >= 40) {
        nav1.classList.add("color");
    } else {
        nav1.classList.remove("color");
    }
}

let sticky = document.querySelectorAll('.sticky');
let btn = document.querySelectorAll('.btn-global');
let btn2 = document.querySelectorAll('.icon-mobile');

// Add event listener to each button
btn.forEach(button => {
  button.addEventListener('click', () => {
    // Add class to each sticky element
    sticky.forEach(stick => {
      stick.classList.add("show");
    });
  });
});
btn2.forEach(button => {
  button.addEventListener('click', () => {
    // Add class to each sticky element
    sticky.forEach(stick => {
      stick.classList.remove("show");
    });
  });
});



