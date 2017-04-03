// getting my template from html
var template = document.getElementById('myTemplate');
// getting the button that shows the stock
var myBtn = document.getElementById('showTable');
// the dropDown that has the shoe sizes
var sizeDdown = document.getElementById("sizeDdown")
  // the dropDown that has the shoe colors
var colorDdown = document.getElementById("colorDdown")


// here I have the data that is in my table in a array
var shoes = [{
  brand: "All Star",
  size: '1',
  color: "black",
  in_Stock: 3
}, {
  brand: "All Star",
  size: '2',
  color: "white",
  in_Stock: 3
}, {
  brand: "All Star",
  size: '3',
  color: "navy",
  in_Stock: 3
}, {
  brand: "All Star",
  size: '4',
  color: "red",
  in_Stock: 3
}];



// compiling my data in js with the template
var handlebars = Handlebars.compile(template.innerHTML);
// when I click the button to display stock this should happen
myBtn.addEventListener("click", function() {
  // console.log("click");
  // gets the selected shoe color value e.g blue, black, white
  var selectedColor = colorDdown.value;
  // gets the selected shoe size value e.g 1, 2, 3
  var selectedSize = sizeDdown.value;
  // empty array
  var shoeStore = [];

  if (selectedColor === "All" && selectedSize === "All") {
    shoeStore = shoes;
  }
  else if (selectedColor === "All" && selectedSize !== "All"){
    for (var i = 0; i < shoes.length; i++) {
      var eachShoeObj = shoes[i]
      if (eachShoeObj.size === selectedSize) {
        shoeStore.push(eachShoeObj)
      };
    }
  }
  else if (selectedColor !== "All" && selectedSize === "All"){
    for (var i = 0; i < shoes.length; i++) {
      var eachShoeObj = shoes[i]
      if (eachShoeObj.color === selectedColor) {
        shoeStore.push(eachShoeObj)
      };

    }
  }
  else {
    // here I loop through the data and filter a selected color
    for (var i = 0; i < shoes.length; i++) {
      var eachShoeObj = shoes[i]
      if (eachShoeObj.color === selectedColor && eachShoeObj.size === selectedSize) {
        shoeStore.push(eachShoeObj)
      };

    }
  }


  // here I take info in shoes to data(#each data) handlebars template
  var handleData = handlebars({
    data: shoeStore
  });
  // Displaying template on empty div called outPut
  var outPut = document.getElementById('outPut');
  outPut.innerHTML = handleData;

});
