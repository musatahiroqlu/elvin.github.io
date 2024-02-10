let form = document.querySelector('.form')
let tBody = document.querySelector("tbody")
let Btn = document.querySelector(".x")
let addBtn = document.querySelector('.AddBtn') 
let dataList = document.querySelector('dataList') 
let Price = document.querySelector('.Price') 
let Card = document.querySelector('#card') 
let Name = document.querySelector("#name")



Btn.addEventListener('click',formuGosterme)
addBtn.addEventListener('click',addFunction )
function formuGoster(){
    form.style.display = "flex"
}

let Cars = JSON.parse(localStorage.getItem('')) || []

console.log(Cars)

function formuGosterme(event){
    event.preventDefault()
    form.style.display = "none"
}

function Table(){
  tBody.innerHTML = " "
  if(Cars.length){
    Cars.forEach(Car => {
        let tr = document.createElement("tr")
        let tdQaqash = document.createElement("td")
        tdQaqash.innerHTML = Car.id
        let tdName = document.createElement("td")
        tdName.innerHTML = Car.name
        let tdPrice = document.createElement("td")
        tdPrice.innerHTML = `${Car.price}`
        let tdImage = document.createElement("img")
        tdImage.innerHTML = Car.tdImage
        tr.append(tdQaqash,tdName,tdPrice,tdImage)
        tBody.append(tr)
    });
  }

}

Table()

function addFunction(event){
  event.preventDefault()
  let NewTable = {
    id: getFunctionId() + 1,
    name:dataList.value,
    price:Price.value,
  
  }

  Cars.unshift(NewTable)
  Table()
  form.style.display = "flex"
  localStorage.setItem('CARS',JSON.stringify(Cars))
}



function getFunctionId(){
 if(Cars.length){
  Cars.sort((a,b)=>b.id-a.id)
  return Cars[0].id
 }
 else{
  return 0
 }
}





















// ()