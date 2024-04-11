let img, titulo, fondo, card, esp, año, fecha, imagen, cal

function traerInfo() {
    axios.get("http://www.omdbapi.com/?t=shock&apikey=e88ee8a0")

        .then(res => {
            console.log(res);
            img = document.getElementById("imagen").src = res.data.Poster
            fondo = res.data.Poster
            //esp = res.
            card = document.getElementById("card").style = `background-image: -webkit-linear-gradient(left, rgba(0,0,0,0.90), rgba(0,0,0,0.10)), url(${fondo});background-repeat: no-repeat; background-size: cover;`
            titulo = document.getElementById("titulo").innerText = res.data.Title
            año = document.getElementById("año").innerText = res.data.Year
            fecha = document.getElementById("fecha").innerText = `${res.data.Released} ● ${res.data.Genre} ● ${res.data.Runtime}`
            cal = res.data.Metascore;
            calificacion = document.getElementById("cal").innerHTML = `<div class="row"><div class="col-10"><input type="range" class="form-range" min="0" max="100" step="${res.data.Metascore}" id="customRange2"></div><div class="col-2"> <span>${res.data.Metascore}</span></div></div>`;
            descrpcion = document.getElementById("descripcion").innerHTML = `<h4>Descripcion</h4><br> ${res.data.Plot}`
            director = document.getElementById("director").innerHTML = ` ${res.data.Director} <br> <h6>Director</h6>`
            actor = document.getElementById("actores").innerHTML = ` ${res.data.Actors} <br> <h5>Actores</h5>`
            escritor = document.getElementById("escritor").innerHTML = ` ${res.data.Writer} <br> <h5>Escritores</h5>`
        })
        .catch(err => {
            console.log(err);
        })
}

function buscarPelicula(pelicula) {
    axios.get("http://www.omdbapi.com/?t=" + pelicula + "&apikey=e88ee8a0")
        .then(res => {
            console.log(res);
            img = document.getElementById("imagen").src = res.data.Poster
            fondo = res.data.Poster
            //esp = res.
            card = document.getElementById("card").style = `background-image: -webkit-linear-gradient(left, rgba(0,0,0,0.90), rgba(0,0,0,0.10)), url(${fondo});background-repeat: no-repeat; background-size: cover;`
            titulo = document.getElementById("titulo").innerText = res.data.Title
            año = document.getElementById("año").innerText = res.data.Year
            fecha = document.getElementById("fecha").innerText = `${res.data.Released} ● ${res.data.Genre} ● ${res.data.Runtime}`
            cal = res.data.Metascore;
            calificacion = document.getElementById("cal").innerHTML = `<div class="row"><div class="col-10"><input type="range" class="form-range" min="0" max="100" step="${res.data.Metascore}" id="customRange2"></div><div class="col-2"> <span>${res.data.Metascore}</span></div></div>`;
            descrpcion = document.getElementById("descripcion").innerHTML = `<h4>Descripcion</h4><br> ${res.data.Plot}`
            director = document.getElementById("director").innerHTML = ` ${res.data.Director} <br> <h6>Director</h6>`
            actor = document.getElementById("actores").innerHTML = ` ${res.data.Actors} <br> <h5>Actores</h5>`
            escritor = document.getElementById("escritor").innerHTML = ` ${res.data.Writer} <br> <h5>Escritores</h5>`
        })
        .catch(err => {
            console.log(err);
        })
}