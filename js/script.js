let hamb = document.querySelector("#hamb");
// let close = document.querySelector("")
let popup = document.querySelector("#popup");
let menu = document.querySelector(".allMenu");

hamb.addEventListener("click", hambHundler);

function hambHundler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    menu.style.display = "flex";
    renderPopup()
}
function renderPopup() {
    popup.appendChild(menu)
}

$('.slider').slick({
    autoplay:true,
    arrows:false,
    autoplaySpeed: 3000
}) ;

$('.slider-info').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

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
        content.classList.remove("active")
    })
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}



async function shopBody() {
    try {

    } catch (e) {
        console.log(e);
    }
    const res = await fetch(
        "https://63a1792da543280f77577ea9.mockapi.io/store/articles"
    );
    const data = await res.json();
    console.log(data)
    // const allCatItem = () => {
    //     const appendCatClass = document.querySelector(".contentWrapper")
    //     const newArticles = document.querySelectorAll(".content")
    //     let id = newArticles.map(el => {
    //         el.getAttribute("id")
    //         console.log(el)
    //     })
    //     data.forEach(function (i) {
    //         if(id === i.category){
    //             newArticles.innerHTML += `<div class="collections-item">
    //                 <img class="item-hover sizes-of-photo" src=".${i.img}" alt="">
    //                 <div class="item-title">${i.title}</div>
    //                 <div class="item-price">${i.price}</div>
    //                 <a class="busket-button" href="#">Добавить в корзину</a>
    //             </div>`
    //         }
    //
    //     })
    //
    //
    // };
    const allCatItem = () => {
        const appendCatClass = document.querySelector(".contentWrapper")

        data.forEach(function (i) {
            try{
                let newArticles = document.getElementById(i.category)
                if (i.category === "coat"){
                    newArticles.classList.add("active")
                }
                carts(i,newArticles)
            }
            catch{
                let newArticles = document.createElement("div")
                newArticles.classList.add("content")
                newArticles.setAttribute("id", i.category)
                carts(i,newArticles)
            }
            // appendCatClass.appendChild(newArticles)
            }
        )
    function carts(i,newArticles){
        newArticles.innerHTML += `<div class="collections-item">
                <img class="item-hover sizes-of-photo" src=".${i.img}" alt="">
                <div class="item-title">${i.title}</div>
                <div class="item-price">${i.price}</div>
                <a class="busket-button" href="#">Добавить в корзину</a>
            </div>`
        appendCatClass.appendChild(newArticles)
    }

    };

    allCatItem()
    const cards = document.querySelectorAll(".collections-item")


    cards.forEach((el,index) => {
console.dir(el)
        const img = el.childNodes[1]
        const imgAttributes = img.getAttribute("src")
        const btn = el.childNodes[7]
        const title = el.childNodes[3].innerText
        const price = el.childNodes[5].innerText
        const storage = localStorage.getItem("cart") || "[]"
        btn.addEventListener("click", () =>{

            const cart = JSON.parse(storage)
            const card = {
                imgAttributes,title,price
            }
            localStorage.setItem("cart", JSON.stringify([...cart,card]))
            console.log(imgAttributes,title,price)
        })

    })
}shopBody()
