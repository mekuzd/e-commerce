let objinStore = localStorage.getItem("objinstore")

let ArrofobjinStore = JSON.parse(objinStore)

ArrofobjinStore.map((value, index) => {

    document.getElementById('box').innerHTML += `
        
         <div class=" obj">
                 <div style= " width: 100% ;"> <img src= ${value.imageSource} /> </div> 
                 <h3 > ${value.title}</h3>
                <h5 class="price">   ${value.price} </h5>
                <button class="btn btn-danger " onclick="  Removefromcart( event, ${index}) "> Remove </button>
                <div class="btns">
                <button onclick="minus(${index},event)" class=" operators" > &minus;    </button>
                <button id="qty"> 1 </button> 
                <button onclick=" plus(${index},event) " class="operators" >  &plus;  </button>
                </div> 
                <br>
                <p>Total</p>
              <span>$</span><button class="totalbtn"> ${value.price} </button>
            </div >    
        
        `
})

let Total = document.getElementsByClassName('totalbtn')
let subtotal = document.getElementById('subtotal')
let p = document.getElementsByClassName('price')


function Removefromcart(event, index) {
    let objinStore = localStorage.getItem("objinstore")
    let ArrofobjinStore = JSON.parse(objinStore)
    ArrofobjinStore.splice(index, 1)
    localStorage.setItem("objinstore", JSON.stringify(ArrofobjinStore))
    subtotal.innerHTML = Math.round((Number(subtotal.innerHTML) - Number(Total[index].innerHTML)) * 100) / 100
    event.target.closest('div').remove()
}


function plus(index, event) {
    let qty = event.target.closest('div').children[1].innerHTML
    let quantity = Number(qty)
    event.target.closest('div').children[1].innerHTML = quantity += 1
    let price = Number(p[index].innerHTML)
    Total[index].innerHTML = Math.round((price * quantity) * 100) / 100
    subtotal.innerHTML = Math.round((Number(subtotal.innerHTML) + price) * 100) / 100
}

function minus(index, event) {
    let qty = event.target.closest('div').children[1].innerHTML
    let price = Number(p[index].innerHTML)
    let quantity = Number(qty)

    if (quantity > 1) {
        event.target.closest('div').children[1].innerHTML = quantity - 1
        Total[index].innerHTML = Math.round((Total[index].innerHTML - price) * 100) / 100
        subtotal.innerHTML = Math.round((Number(subtotal.innerHTML) - price) * 100) / 100
    }

}


let sum = 0
for (let index = 0; index < Total.length; index++) {
    sum = Number(sum) + Number(Total[index].innerHTML)
}
subtotal.innerHTML = sum


