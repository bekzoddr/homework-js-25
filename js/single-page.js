const API_URL = "https://fakestoreapi.com/products/"
const mainProduct = document.querySelector(".main__image")


async function fetchSingleUser(api) {
    let params = new URLSearchParams(window.location.search)
    let id = params.get("id")

    let data = await fetch(`${api}/${id}`)
    data
        .json()
        .then(res => SingleUser(res))
        .catch(err => console.log(err))
}

fetchSingleUser(API_URL)

function SingleUser({image}) {
    mainProduct.src = image
}
