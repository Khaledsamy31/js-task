var addButton = document.querySelectorAll(".products")
var pros = document.querySelector("#pro")
var div1 = document.querySelector("#div1")
var showPrice = document.querySelector("#showPrice")
var totalPrice1 = document.querySelector("#totalPrice1")
var costPrint = document.querySelector("#costPrint")
var priceTitle = document.querySelector("#priceTitle")
var costUniteTitle = document.querySelector("#costUniteTitle")
var counter = document.querySelector("#counter")
var totalPrice = 0
var priceUnite = 0
var counterValue = 0



addButton.forEach(function(addCard){
    addCard.onclick = function(){

        totalPrice += + ( priceTitle.getAttribute("price") )
        priceUnite =  priceTitle.getAttribute("price")
        div1.innerHTML += pros.textContent + " " +  priceUnite + "<br>"
        
        counterValue += +1
        counter.innerHTML = counterValue

        if (div1.innerHTML != ""){
            showPrice.style.display = "block"
            showPrice.style.fontSize = "20px"

        }
    }
})

priceTitle.innerHTML = "PRICE " + priceTitle.getAttribute("price") + " L.E"
priceTitle2.innerHTML = "PRICE " + priceTitle2.getAttribute("price") + " L.E"
priceTitle3.innerHTML = "PRICE " + priceTitle3.getAttribute("price") + " L.E"
priceTitle4.innerHTML = "PRICE " + priceTitle4.getAttribute("price") + " L.E"
priceTitle5.innerHTML = "PRICE " + priceTitle5.getAttribute("price") + " L.E"
priceTitle6.innerHTML = "PRICE " + priceTitle6.getAttribute("price") + " L.E"
priceTitle7.innerHTML = "PRICE " + priceTitle7.getAttribute("price") + " L.E"
priceTitle8.innerHTML = "PRICE " + priceTitle8.getAttribute("price") + " L.E"
priceTitle9.innerHTML = "PRICE " + priceTitle9.getAttribute("price") + " L.E"
priceTitle10.innerHTML = "PRICE " + priceTitle10.getAttribute("price") + " L.E"
priceTitle11.innerHTML = "PRICE " + priceTitle11.getAttribute("price") + " L.E"
priceTitle12.innerHTML = "PRICE " + priceTitle12.getAttribute("price") + " L.E"

function click(){
    totalPrice1.style.display = "block"
    costPrint.innerHTML = totalPrice + " L.E"
 }
 showPrice.onclick = click

