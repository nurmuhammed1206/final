$('.js-open-modal').on('click', function () {
    $('.overlay, #consultation').fadeIn()
 });
 $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut()
 });
 
 $('.button_submit').on('click', function () {
             $('.overlay, #consultation').fadeOut();
             $('.overlay, #thanks').fadeIn()
 });
 
 const tabs = document.querySelector(".wrapper-item");
 const tabButton = document.querySelectorAll(".tab-button");
 const contents = document.querySelectorAll(".content");
 
 tabs.onclick = e => {
   const id = e.target.dataset.id;
   if (id) {
     tabButton.forEach(btn => {
       btn.classList.remove("active");
     });
     e.target.classList.add("active");
 
     contents.forEach(content => {
       content.classList.remove("active");
     });
     const element = document.getElementById(id);
     element.classList.add("active");
   }
 }