const logo = document.querySelector('.logo');
const rockz = document.querySelector('.rockz');

logo.addEventListener('mouseover', () => {
rockz.style.transform = 'scale(0.5)';
rockz.style.display = 'block';
rockz.style.fontFamily = 'Lumanosimo, cursive'; 
rockz.style.fontSize = '45px'; 
rockz.style.fontweight = '1000';
});

logo.addEventListener('mouseout', () => {
rockz.style.transform = 'scale(1)';
rockz.style.display = 'none';
});

function toggleMenu() {
    const navbarCollapse = document.getElementById('navbarTogglerDemo2');
    if (navbarCollapse.style.display == "block") {
      navbarCollapse.style.display = "none";
  } else {
    navbarCollapse.style.display = "block";
  }
   navbarCollapse.classList.toggle('active');
  }


// Dark mode

  function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}


// Image section

// const carouselWrapper = document.getElementById('carouselWrapper');
//     const items = document.querySelectorAll('.carousel-item');
//     const totalWidth = items.length * (items[0].clientWidth + 10); 
//     const clone = carouselWrapper.innerHTML; 
//     carouselWrapper.innerHTML += clone; 

//     document.styleSheets[0].insertRule(`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-${totalWidth}px); } }`, 0);


// Testimonials

document.addEventListener("DOMContentLoaded", function() {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let currentTestimonial = 0;
  const intervalTime = 5000; // Time interval for auto-sliding (5 seconds)
  let slideInterval;

  // Function to show the current testimonial and hide others
  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          if (i === index) {
              testimonial.style.display = "block";
          } else {
              testimonial.style.display = "none";
          }
      });
  }

  // Show the next testimonial
  function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
  }

  // Show the previous testimonial
  function prevTestimonial() {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
  }

  // Set up the automatic sliding functionality
  function startAutoSlide() {
      slideInterval = setInterval(nextTestimonial, intervalTime);
  }

  // Stop automatic sliding (for when user clicks next/prev)
  function stopAutoSlide() {
      clearInterval(slideInterval);
  }

  // Event listeners for buttons
  nextBtn.addEventListener("click", function() {
      stopAutoSlide();
      nextTestimonial();
      startAutoSlide(); // Restart auto slide after manual action
  });

  prevBtn.addEventListener("click", function() {
      stopAutoSlide();
      prevTestimonial();
      startAutoSlide(); // Restart auto slide after manual action
  });

  // Initialize
  showTestimonial(currentTestimonial); // Show the first testimonial
  startAutoSlide(); // Start automatic slide
});


// Count

// document.addEventListener("DOMContentLoaded", function() {
//     const timer = document.querySelector(".timer");
//     const from = parseInt(timer.getAttribute("data-from"), 10);
//     const to = parseInt(timer.getAttribute("data-to"), 10);
//     const speed = parseInt(timer.getAttribute("data-speed"), 10);
//     const refreshInterval = parseInt(timer.getAttribute("data-refresh-interval"), 10);
//     let current = from;
//     const increment = (to - from) / (speed / refreshInterval);

//     const updateCounter = setInterval(() => {
//       current += increment;
//       if (current >= to) {
//         current = to;
//         clearInterval(updateCounter);
//       }
//       timer.textContent = Math.floor(current);
//     }, refreshInterval);
//   });

