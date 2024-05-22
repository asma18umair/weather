var weather = prompt("Enter the weather (e.g., sunny, rainy, cloudy ,windy):");
if (weather == "sunny") {
  document.write(`<center>` + `<div class="card-1 m-auto rounded-pill   " >` +
    `<img src="hot sun.png"'+ class="img-fluid m-auto w-50 card-img-top" alt="...">` +
    `<div class="card-body">` +
    `<p class="card-text text-center"> <h2><center> uff uff garmi </center> </h2> </br> <b> <h1> <center> sunny😰 </center> </h1> </b></p>` +
    `</div>` +
    `</div>` + `</center>`)
}

else if (weather == "rainy") {
  document.write(`<center>` + `<div class="card-1 m-auto rounded-pill " >` +
    `<img src="rain.webp" class="img-fluid m-auto  w-50 card-img-top" alt="...">` +
    `<div class="card-body">` +
    `<p class="card-text text-center"> <h2><center> 😊barish ka suhana mausam☔</center> </h2> </br> <b> <h1> <center>rainy ☔</center> </h1> </b></p>` +
    `</div>` +
    `</div>` + `</center>`)

}
else if (weather == "cloudy") {
  document.write(`<center>` + `<div class="card-1 m-auto rounded-pill   " >` +
    `<img src="cloudyy.png"'+ class="img-fluid m-auto w-50 card-img-top" alt="...">` +
    `<div class="card-body">` +
    `<p class="card-text text-center"> <h2><center>😊 badal chhaye hue hai⛅ </center> </h2> </br> <b> <h1> <center> cloudy 🌤</center> </h1> </b></p>` +
    `</div>` +
    `</div>` + `</center>`)

}
else if (weather == "windy") {
  document.write(`<center>` + `<div class="card-1 m-auto rounded-pill  " >` +
    `<img src="windy.png"'+ class="img-fluid m-auto w-50 card-img-top" alt="...">` +
    `<div class="card-body">` +
    `<p class="card-text text-center"> <h2><center> Thandi hawaye🌥</center> </h2> </br> <b> <h1> <center> windy🌊 </center> </h1> </b></p>` +
    `</div>` +
    `</div>` + `</center>`)

}
else {
  document.write(`<center>` + `<div class="card m-auto " style="width: 18rem;">` + `<img src="funny.jpeg"` + ` class="card-img-top mx-auto my-auto" alt="...">` + `<div class="card-body">` + `<h1 class="card-title text-center">Achha mazak hai 😆` + `</h1>` + `</div>` + `</div>` + `</center>`)
}

