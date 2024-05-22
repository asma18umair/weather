var weather = prompt("Enter the weather (e.g., sunny, rainy, cloudy ,windy):");
if (weather == "sunny") {
    document.write(`<div class="card m-auto rounded-pill w-75 bg-primary " >` +
        `<img src="hot sun.png"'+ class="img-fluid m-auto w-50 card-img-top" alt="...">` +
        `<div class="card-body">` +
        `<p class="card-text text-center"> <h2><center> uff uff garmi </center> </h2> </br> <b> <h1> <center> sunny😰 </center> </h1> </b></p>`+
    `</div>` +
  `</div>`)
}

else if (weather == "rainy") { 
    document.write(`<div class="card m-auto rounded-pill w-75 bg-tertiary " >` +
`<img src="rain.webp"'+ class="img-fluid m-auto w-50 card-img-top" alt="...">` +
`<div class="card-body">` +
`<p class="card-text text-center"> <h2><center> 😊barish ka suhana mausam☔</center> </h2> </br> <b> <h1> <center>rainy ☔</center> </h1> </b></p>`+
`</div>` +
`</div>`)

}
else if (weather == "cloudy")
  { document.write(`<div class="card m-auto rounded-pill w-75 bg-tertiary " >` +
`<img src="https://icon2.cleanpng.com/20240108/tli/transparent-cloud-cartoon-happy-smiling-cartoon-cloud-sitting-on-black-1710931890303.webp"'+ class="img-fluid m-auto w-50 card-img-top" alt="...">` +
`<div class="card-body">` +
`<p class="card-text text-center"> <h2><center>😊 badal chhaye hue hai⛅ </center> </h2> </br> <b> <h1> <center> cloudy 🌤</center> </h1> </b></p>`+
`</div>` +
`</div>`)

}
else if (weather == "windy")
  { document.write(`<div class="card m-auto rounded-pill w-75 bg-tertiary " >` +
`<img src="windy.jpg"'+ class="img-fluid m-auto w-50 card-img-top" alt="...">` +
`<div class="card-body">` +
`<p class="card-text text-center"> <h2><center> Thandi hawaye🌥</center> </h2> </br> <b> <h1> <center> windy🌊 </center> </h1> </b></p>`+
`</div>` +
`</div>`)

}
else {
  document.write(`<div class="card m-auto " style="width: 18rem;">` + `<img src="funny.jpeg"` + ` class="card-img-top h-25 w-50 mx-auto my-auto" alt="...">` + `<div class="card-body">` + `<h1 class="card-title text-center">Achha mazak hai 😆` + `</h1>` + `</div>` + `</div>`)}

