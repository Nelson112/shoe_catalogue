var template = document.getElementById('myTemplate');
var myBtn = document.getElementById('showTable');
var sizeDdown = document.getElementById("sizeDdown")
var colorDdown = document.getElementById("colorDdown")

var shoes = [
  {
    Brand : "All Star",
    Size : 1,
    Color : "black",
    In_Stock : 3
  },
  {
    Brand : "All Star",
    Size : 2,
    Color : "white",
    In_Stock : 3
  },
  {
    Brand : "All Star",
    Size : 3,
    Color : "navy",
    In_Stock : 3
  },
  {
    Brand : "All Star",
    Size : 4,
    Color : "red",
    In_Stock : 3
  },
  {
    Brand : "Bronx",
    Size : 4,
    Color : "red",
    In_Stock : 3
  },
];
var shoesFilter = function(filter) {
  var selectedSize = sizeDdown.options[sizeDdown.selectedIndex].value;
  var selectedColor = colorDdown.options[colorDdown.selectedIndex].value;
  var filtered = [];
  for(i in shoes){
    if(shoes[i].Color === selectedColor){
      filtered.push(shoes[i]);
    }
  }
  return filtered;
}


myBtn.addEventListener("click", function() {
  console.log("click");
  var handlebars = Handlebars.compile(template.innerHTML);
  var handleData = handlebars({data:shoesFilter});
  var outPut = document.getElementById('outPut');
  outPut.innerHTML = handleData;
});
