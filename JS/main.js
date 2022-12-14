// Settings Box 
document.querySelector(".settings-box > .icon").addEventListener("click", () => {
   settingIcon = document.querySelector(".settings-box > .icon i").classList.toggle("fa-spin");
   document.querySelector(".settings-box").classList.toggle("open");
});
   //colors List
const colorsLi = document.querySelectorAll(".settings-box .colors-list li");
colorsLi.forEach((li) => {
   li.addEventListener("click", (e) => {
      document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
      localStorage.mainColor = e.target.dataset.color;
      document.querySelector(".settings-box .colors-list li.active").classList.remove("active");
      e.target.classList.add("active");
   });
});
   //Random Background choice
let randomBack = true; // random background option 
document.querySelectorAll(".settings-box .option-box .background-choice button").forEach((btn) => {
   btn.addEventListener("click", (e) => {
      document.querySelector(".settings-box .option-box .background-choice button.active").classList.remove("active");
      e.target.classList.add("active");
      if(e.target.textContent === 'Yes') {
            randomBack = true;
            localStorage.setItem("randomBackground", "true");
            runRandomBack();
      } else {
            randomBack = false;
            clearInterval(randomBackInterval);
            localStorage.setItem("randomBackground", "false");
      }
   });
});
// check for main color in loacal storage 
if(localStorage.mainColor) {
   document.documentElement.style.setProperty("--main-color", localStorage.mainColor);
   document.querySelector(".settings-box .colors-list li.active").classList.remove("active");
   document.querySelector(".settings-box .colors-list li[data-color='"+localStorage.mainColor+"']").classList.add("active");
}

//Menu On Mobile
const menuIcon = document.querySelector(".landing-page nav button");
menuIcon.addEventListener("click", () => {
   document.querySelector(".landing-page nav button i:first-of-type").classList.toggle("active");
   document.querySelector(".landing-page nav button i:last-of-type").classList.toggle("active");
   document.querySelector(".landing-page nav ul").classList.toggle("active");
});

// Landing Page Background 
const landingPage = document.querySelector(".landing-page");
const backgroudsArray = ['01.jpg', '02.jpg', '04.jpg', '06.png', '07.jpg', '09.jpg', '10.jpg'];
// check local storage parameter 
if(localStorage.randomBackground === "true") {
   randomBack = true;
   document.querySelector(".settings-box .option-box .background-choice button.active").classList.remove("active");
   document.querySelector(".settings-box .option-box .background-choice button:first-of-type").classList.add("active");
} else if(localStorage.randomBackground === "false") {
   randomBack = false;
   document.querySelector(".settings-box .option-box .background-choice button.active").classList.remove("active");
   document.querySelector(".settings-box .option-box .background-choice button:last-of-type").classList.add("active");
}
let randomBackInterval ; 
function runRandomBack() {
   if(randomBack === true) {
      randomBackInterval = setInterval( () => {
         let randomNum = Math.floor(Math.random() * backgroudsArray.length);
         landingPage.style.backgroundImage = 'url("images/backgrounds/'+ backgroudsArray[randomNum] + '")';
      }, 7000);
   }
}
runRandomBack();

//About Us Section 
animateLeftUp(document.querySelector(".about-us .info-box"));
animateRightUp(document.querySelector(".about-us .image-box"));

// Animation left up Function
function animateLeftUp(elementToAnimate) {
   window.addEventListener("scroll", () => {
      if(window.scrollY >= elementToAnimate.offsetTop - 500 && window.scrollY <= elementToAnimate.offsetTop + elementToAnimate.offsetHeight + 500) {
         elementToAnimate.style.animationName = "left-up";
         elementToAnimate.style.animationDuration = "2s";
         elementToAnimate.style.animationIteration = "1";
         elementToAnimate.style.visibility = "visible";
      } 
   });
}
// Animation right up Function
function animateRightUp(elementToAnimate) {
   window.addEventListener("scroll", () => {
      if(window.scrollY >= elementToAnimate.offsetTop - 500 && window.scrollY <= elementToAnimate.offsetTop + elementToAnimate.offsetHeight + 500) {
         elementToAnimate.style.animationName = "right-up";
         elementToAnimate.style.animationDuration = "2s";
         elementToAnimate.style.animationIteration = "1";
         elementToAnimate.style.visibility = "visible";
      }
   });
}

// Our Skills Section 
//animate Skills Bars
const skillsBars = document.querySelectorAll(".our-skills .skill-row .progress span");
window.addEventListener("scroll", () => {
   if(window.scrollY >= document.querySelector(".our-skills").offsetTop - 500) {
      skillsBars.forEach((row) => {
         row.style.width = row.dataset.progress;
      })
   }
});

//Our gallery Section
const galleryImages = document.querySelectorAll(".our-gallery img");
//show drop box
galleryImages.forEach(image => {
   image.addEventListener("click", () => {
      const dropBox = document.createElement("div");
      dropBox.classList.add("gallery-drop-box");
      dropBox.innerHTML = `
      <div class="image">
            <img src="${image.getAttribute("src")}" alt="">
            <i class="fa-solid fa-xmark"></i>
      </div>
      `;
      document.body.appendChild(dropBox);
   });
})
//hide drop box
document.addEventListener("click", (e) => {
   if(e.target == document.querySelector(".gallery-drop-box .image i")) {
      document.querySelector(".gallery-drop-box").remove();
   }
});


// Testimonials Section 
const btnNext = document.querySelector(".testimonials .btn-next");
const btnPre = document.querySelector(".testimonials .btn-pre");
const testimonialsContainer = document.querySelector(".testimonials .testimonials-container");
let containerDimensions = testimonialsContainer.getBoundingClientRect();

btnNext.onclick = () => {
      document.querySelector(".testimonials .testimonials-container").scrollLeft += containerDimensions.width;
   };
btnPre.onclick = () => {
      document.querySelector(".testimonials .testimonials-container").scrollLeft -= containerDimensions.width;
   };


