    // let navbar = document.querySelector(".navbar");

    // let navLinks = document.querySelector(".nav-links");
    // let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    // let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    // menuOpenBtn.onclick = function () {
    //     navLinks.style.left = "0";
    //   };
    // menuCloseBtn.onclick = function () {
    //     navLinks.style.left = "-100%";
    //   };

    // let htmlcssArrow = document.querySelector(".htmlcss-arrow");
    // htmlcssArrow = function () {
    //     navLinks.classList.toggle("show1");
    //   };
    // let moreArrow = document.querySelector(".more-arrow");
    // moreArrow.onclick = function () {
    //     navLinks.classList.toggle("show2");
    //   };
    // let jsArrow = document.querySelector(".js-arrow");
    // jsArrow.onclick = function () {
    //     navLinks.classList.toggle("show3");
    //   };


















const API_URL = "https://fakestoreapi.com/products/"
const postWrapper = document.querySelector(".post-wrapper")
const loading = document.querySelector(".loading")

async function fetchData(api) {
    let data = await fetch(api)
    data
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
        .finally(()=>{
          loading.style.display = "none"
        })
}
fetchData(API_URL)

function createCard(data) {
    data.forEach(({id, title, price, description, category, image, rating}) => {
        let card = document.createElement("div")
        card.className = "col-3"
        card.innerHTML = `
      <div class="product__card">
              <button class="check">Hot</button>
              <img class="image" src=${image} alt="lemon" />
              <h1 class="name">${category}</h1>
              <h1 class="title">${description}</h1>
              <div class="rating">
                <img src="images/star.svg" alt="star" />
                <p class="voice">[${rating.rate}]</p>
              </div>
              <h4 class="addres">By<span>Nestfood</span></h4>
              <div class="card__bottom">
                <h2 class="price">${price}<span>$32.8</span></h2>
                <button class="cart">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <h3>Add</h3>
                </button>
              </div>
            </div>

        `
       card.addEventListener('click',()=>singleRoute(id))
      postWrapper.appendChild(card)
    })

}
function singleRoute(id){
  window.open(`/pages/single__page.html?id=${id}`, "_self") 
}