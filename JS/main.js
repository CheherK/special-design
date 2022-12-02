// Settings Box 
document.querySelector(".settings-box > .icon").addEventListener("click", () => {
   settingIcon = document.querySelector(".settings-box > .icon i").classList.toggle("fa-spin");
   document.querySelector(".settings-box").classList.toggle("open");
});

const colorsLi = document.querySelectorAll(".settings-box .colors-list li");
colorsLi.forEach((li) => {
   li.addEventListener("click", (e) => {
      document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
      document.querySelector(".settings-box .colors-list li.active").classList.remove("active");
      e.target.classList.add("active");
   });
});

//Menu On Mobile
const menuIcon = document.querySelector(".landing-page nav button");
menuIcon.addEventListener("click", () => {
   document.querySelector(".landing-page nav button i:first-of-type").classList.toggle("active");
   document.querySelector(".landing-page nav button i:last-of-type").classList.toggle("active");
   document.querySelector(".landing-page nav ul").classList.toggle("active");
});

// Landing Page Background 
const landingPage = document.querySelector(".landing-page");
const backgroudsArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.png', '07.jpg', '08.jpg', '09.jpg', '10.jpg'];
setInterval( () => {
   let randomNum = Math.floor(Math.random() * backgroudsArray.length);
   console.log(randomNum);
   landingPage.style.backgroundImage = 'url("images/backgrounds/'+ backgroudsArray[randomNum] + '")';
}, 10000);

