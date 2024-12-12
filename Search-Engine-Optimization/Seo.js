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
    alert(navbarCollapse.style.display);
    if (navbarCollapse.style.display == "block") {
      navbarCollapse.style.display = "none";
  } else {
    navbarCollapse.style.display = "block";
  }
   navbarCollapse.classList.toggle('active');
  }
