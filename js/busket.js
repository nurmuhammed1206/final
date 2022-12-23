const busket = document.querySelector(".commodity-about")
const storage = JSON.parse(localStorage.getItem("cart") || "[]")

if (storage.length){
    storage.forEach(el => {
        const {imgAttributes,title,price} = el
        const newCard =  document.createElement("div")

        newCard.classList.add("busketItem")
        newCard.innerHTML = `
                    <div class="busketTitle">
                        <div>
                        <img data-delete class="size-com" src="../icons/Vector 3 (1).png" alt="">
</div>
                        <div>
                       
                        <img class="size-pic" src="${imgAttributes}" alt="">
                        </div>
                        <div>${title}</div>
                    </div>
                    <div class="price">${price}</div>
                    <div class="quantity">1</div>
                    <div class="conclude">${price}</div>
        `
        console.log(newCard)
        busket.appendChild(newCard)
    })

}


