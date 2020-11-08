// 3b i-iii //
const boilingTemperature = () => {
    document.getElementById("boiling-temp").innerHTML = 212;
};
boilingTemperature();

const freezingTemperature = () => {
    document.getElementById("freezing-temp").innerHTML = 32;
};
freezingTemperature();

const waterTemperature = () => {
    document.getElementById("water-temp").innerHTML = 65;
};
waterTemperature();

//3b iv//
setTimeout( function() {
   if (waterTemperature > 212){
    document.getElementById("boiling").classList.remove("hide");
    document.getElementById("boiling").classList.add("show");
   }
}, 3000)

setTimeout( function() {
    if (waterTemperature < 32){
     document.getElementById("frozen").classList.remove("hide");
     document.getElementById("frozen").classList.add("show");
    }
 }, 3000)

 setTimeout( function() {
    if (waterTemperature <= 212 && waterTemperature >= 32){
     document.getElementById("good-temp").classList.remove("hide");
     document.getElementById("good-temp").classList.add("show");
    }
 }, 3000)