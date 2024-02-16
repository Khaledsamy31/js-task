var productItem = document.querySelectorAll(".productItem button")
var cardContent = document.querySelector("#cardContent")
var checkCard = document.querySelector("#checkCard")
var totalPricePrint = document.querySelector("#totalPricePrint")
var counter = document.querySelector("#counter")
var buyNow = document.querySelector("#buyNow")
var counterValue = 0
var totalPrice = 0
var unitePrice = 0

productItem.forEach(function(addProduct){

    addProduct.onclick = function(){


        totalPrice += +(addProduct.getAttribute("price"))
        
        totalPricePrint.innerHTML = totalPrice
        unitePrice = addProduct.getAttribute("price")



     cardContent.innerHTML += addProduct.textContent + " " + unitePrice + "<br>"


     if(cardContent.innerHTML != ""){
        checkCard.style.display = "block"
        checkCard.style.fontSize = "18px"
     }

     counterValue += +1
     counter.innerHTML = counterValue

    }


})

buyNow.onclick = function(){
    alert ("This Page Create By Khaled Samy Just For Test. ThankYouuu")

}