
let cartItems = []

let container = []

async function load() {
    let response = await fetch('store.json')
    let items = await response.json()

    container = items
    items.map((val, index) => {
        document.getElementById('display').innerHTML +=
            `
            <div class=" obj">
                 <h3> ${val.title}</h3>
                 <div style= " width: 100% ;"> <img src= ${val.image} /> </div>   
                <h5> <span> Price: </span>  ${val.price} $</h5>
                <button onclick="  addtocart( ${index}) "> Add </button>
            </div >
       
                `
    })

}
load()



function addtocart(index) {

    let title = container[index].title
    let imageSource = container[index].image
    let price = container[index].price
    let quantity = 1
    let total = price

    let objinstore = { title, imageSource, price, quantity, total }
    cartItems.push(objinstore)
    document.getElementById('cart').innerHTML = cartItems.length
    localStorage.setItem("objinstore", JSON.stringify(cartItems))

}


function cart() {
    window.location.href = "cart.html"
}


let ArrofobjinStore = JSON.parse(localStorage.getItem('objinstore'))

ArrofobjinStore.map((value) => {
    cartItems.push(value)
})

if (cartItems.length > 0) {
    document.getElementById('cart').innerHTML = cartItems.length
}