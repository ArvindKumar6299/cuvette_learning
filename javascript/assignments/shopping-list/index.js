const item = document.querySelector("#item-name")
const price = document.querySelector("#item-price")
const add_item = document.querySelector(".add")
const calculate = document.querySelector(".calculate");


let sum = 0;




add_item.addEventListener('click',(e)=>{
  e.preventDefault();
  const itemValue = item.value.trim();
  console.log(itemValue);
  const itemPrice = price.value.trim();

  if(itemValue == "" || itemPrice == ""){
    alert("Missing  item or price !");
    return;
  }
  item.value="";
  price.value="";

  const addedContainer = document.createElement("div");
  addedContainer.classList.add("addedContainer");
  const tableList = document.createElement("table");
  const tableRow = document.createElement("tr");
  const tabledataName = document.createElement("td");
  const tabledataPrice = document.createElement("td");
  const tableinputName = document.createElement("input");
  const tableinputprice = document.createElement("input");

  tabledataName.appendChild(tableinputName);
  tabledataPrice.appendChild(tableinputprice);
  tableRow.appendChild(tabledataName);
  tableRow.appendChild(tabledataPrice);

  tableList.appendChild(tableRow);
  addedContainer.appendChild(tableList);
  calculate.appendChild(addedContainer);
  
  tableinputName.value = itemValue;
  tableinputprice.value = itemPrice;
  tableinputName.setAttribute("readonly","readonly");
  tableinputprice.setAttribute("readonly","readonly");
   

  //add total of all items
  sum += parseFloat(itemPrice);
  totalPriceValueInput.value = sum.toFixed(2);

  itemValue="";
  itemPrice="";
})



const totaltable = document.createElement("table");
const totalrow = document.createElement("tr");
const totaldataheading = document.createElement("td");
const totaldataPrice = document.createElement("td");
const totalPriceValueInput = document.createElement("input");
const heading = document.createElement("h3");
heading.classList.add("heading");
heading.textContent = "Grand Total";

totaltable.appendChild(totalrow);
totalrow.appendChild(totaldataheading);
totalrow.appendChild(totaldataPrice);
totaldataheading.appendChild(heading);
totaldataPrice.appendChild(totalPriceValueInput);
calculate.appendChild(totaltable); 
totalPriceValueInput.setAttribute('readonly','readonly');
totalPriceValueInput.value = sum.toFixed(2);