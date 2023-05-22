//Change document background color to
//silver

document.getElementById("en").style.backgroundColor="silver";





//Change the font color for h1 title tag to
//green
document.getElementById("title").style.color="green";







//Change the font case for h3 title tags to
//uppercase
document.getElementById("fru").style.textTransform="uppercase"
// document.getElementById("h2").style.textTransform="uppercase"
document.getElementById("veg").style.textTransform="uppercase"








//Add one more fruit to the fruits list
let fruits = document.createElement("li");
fruits.innerHTML = "Avocado"
document.getElementById("fruList").appendChild(fruits)












//Add one more vegetable to the vegetables
//list
let vegetables= document.createElement('li');
vegetables.innerHTML="kales"
document.getElementById("vegList").appendChild(vegetables);


