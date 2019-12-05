
//Fade out landing page on scroll//
const opacityAnchor = document.querySelector('.opacityAnchor').offsetTop;
function fadeOnScroll() {
    if(window.pageYOffset >= 0 & window.innerWidth > 599) { 
        const opacity = (window.pageYOffset / opacityAnchor);
        
        const beeBackground = document.querySelector('header');
        beeBackground.style.background = "linear-gradient(rgba(253, 253, 253, " + (opacity / 2) + "), rgba(253, 253, 253, " + (opacity) + ")), url('./IMG/art50ss.jpg')";
    } else if(window.pageYOffset >= 0 & window.innerWidth <= 599) {
        const opacity = (window.pageYOffset / opacityAnchor);
        
        const beeBackground = document.querySelector('header');
        beeBackground.style.background = "linear-gradient(rgba(253, 253, 253, " + (opacity / 2) + "), rgba(253, 253, 253, " + (opacity) + ")), url('./IMG/art50-mobile.jpg')", "background-position: center", "background-size: cover", "background-repeat: no-repeat";
    }
}  

window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('resize', fadeOnScroll);

 



/////// menu open close //////////

let menu = document.querySelector(".menuIcon");
let menuList = document.querySelector("nav ul");
const menuT = document.querySelector(".ham");
const menuItems = document.querySelectorAll('nav li a');
const mainMav = document.querySelector('nav');




function menuToggle() {
    menuList.classList.toggle('showMenu');
    
    mainMav.classList.toggle('backgroundOpacity');
    
    menu.classList.toggle('open');
    

}
menu.addEventListener('click', menuToggle)
menuItems.forEach(i => i.addEventListener('click', menuToggle));

///////// Box shadow menu sticky Nav ////////

const navAnch = document.querySelector('.navAnch');
const navBar = document.querySelector('nav');

function addShadow() {
    const navOffset = navAnch.offsetTop;
    const logo = document.querySelector('.logo');
    
    if(window.pageYOffset >= navOffset) {
        navBar.classList.add('addShadow');
        logo.classList.add('shrink');
    } else {
      navBar.classList.remove('addShadow');
      logo.classList.remove('shrink');
    }
}

window.addEventListener('scroll', addShadow);


////////// LAZY LOAD FROM https://codepen.io/imagekit_io/pen/RBXVrW //////////
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })
  
  
  