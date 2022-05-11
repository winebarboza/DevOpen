class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


//menu mobile


var btn = document.querySelector("#button-menu");

btn.addEventListener("click", function() {

    var div = document.querySelector("#hero");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});

// Ficar ouvindo quando a tela mudar de tamanho
// Toda vez que a tela mudar de tamanho
// Verificar o display da div menu
// Se o tamanho não de mobile, eu vou deixar a divi ficar visível novamente

window.addEventListener("resize", () =>{
  var div = document.querySelector("#hero");
  const width = document.documentElement.clientWidth;  
  // Display result inside a div element 

  if(width > 600){
    if(div.style.display === "none") {
      div.style.display = "block";
     } 
  }else{
    if(div.style.display === "block") {
      div.style.display = "none";
     }
  }
});
// ao clicar no botão div principal desaparece ou aparece