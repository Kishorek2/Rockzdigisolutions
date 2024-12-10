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
   // navbarCollapse.classList.toggle('active');
  }


// scroll

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//   console.log(entry)
//   if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//   } else {
//       entry.target.classList.remove('show');
//   }
//   });
//   });
//   const hiddenElements = document.querySelectorAll('.hidden');
//   hiddenElements.forEach((el) => observer.observe (el));


// Dark mode

  function myFunction() {
    alert("Test");
   var element = document.body;
   element.classList.toggle("dark-mode");
}
