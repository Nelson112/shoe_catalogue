var myTableTemplate = document.querySelector('#myTemplate');
var outPut = document.querySelector('.outPut');

var checkStockBtn = document.querySelector('#checkStockBtn');
var addStockBtn = document.querySelector('#addStockBtn');

var sizeDdownTemp = document.getElementById("sizeDdownTemp")
var colorDdownTemp = document.getElementById("colorDdownTemp")

var sizesDdown = document.querySelector(".sizesDdown")
var colorsDdown = document.querySelector(".colorsDdown")

var combineDdownSize = Handlebars.compile(sizeDdownTemp.innerHTML)
var combineDdownColor = Handlebars.compile(colorDdownTemp.innerHTML)



var shoes = [{
  brand: "All Star",
  size: '1',
  color: "black",
  in_Stock: 3,
  price: "2000"
}, {
  brand: "All Star",
  size: '2',
  color: "white",
  in_Stock: 3,
  price: "2000"
}, {
  brand: "All Star",
  size: '3',
  color: "navy",
  in_Stock: 3,
  price: "2000"
}, {
  brand: "All Star",
  size: '4',
  color: "red",
  in_Stock: 3,
  price: "2000"
}];

var addShoeBrand = document.getElementById("addShoeBrand");
var addShoeSize = document.getElementById("addShoeSize");
var addShoeColor = document.getElementById("addShoeColor");
var addShoeQuantity = document.getElementById("addShoeQuantity");
var addShoeQuantity = document.getElementById('addShoePrice');



var combineTemp = Handlebars.compile(myTableTemplate.innerHTML);
checkStockBtn.addEventListener("click", function() {
  var handleData = combineTemp({
    data: shoes
  });
  outPut.innerHTML = handleData;
});

addStockBtn.addEventListener("click", function() {
  if (addShoeBrand.value.length > 0 && addShoeSize.value.length > 0 && addShoeColor.value.length > 0 && addShoeQuantity.value.length > 0 && addShoePrice.value.length > 0) {
    var addStock = shoes.push({
      brand: addShoeBrand.value,
      size: addShoeSize.value,
      color: addShoeColor.value,
      in_Stock: addShoeQuantity.value,
      price: addShoeQuantity.value
    })

    var handleSizes = combineDdownSize({
      sizes: shoes
    });
    var handleColors = combineDdownColor({
      colors: shoes
    });
    sizesDdown.innerHTML = handleSizes
    colorsDdown.innerHTML = handleColors
    addShoeBrand.value = ""
    addShoeSize.value = ""
    addShoeColor.value = ""
    addShoeQuantity.value = ""
    addShoePrice.value = ""
  };
});
