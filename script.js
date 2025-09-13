const imagenGrande = document.getElementById("imagenGrande")
let title = document.getElementById("title")
const imagen = document.getElementById ("imagen") 
const flechaIzquierda = document.getElementById("flechaIzquierda")
const flechaDerecha = document.getElementById("flechaDerecha")
const equisCerrar = document.getElementById("equisCerrar")
let imagenPeq = [... document.querySelectorAll(".imagenPeq")]
const toggle = document.getElementById("menu-input");
const carrucel = document.getElementById("carrucel");
let posicion = 0
imagenPeq.forEach((elemento, i) =>{
    elemento.addEventListener("click", (e) => {
        posicion = i;
        imagenGrande.style.display = "flex"
        imagen.src = elemento.src
        console.log(posicion)
        title.textContent = elemento.dataset.name;
    })
});

equisCerrar.addEventListener("click", (e) => {
    imagenGrande.style.display = "none"
})

flechaDerecha.addEventListener("click", (e) => 
{
    if (posicion == imagenPeq.length -1)
    posicion = -1
    posicion++
    imagen.src = imagenPeq[posicion].src
    title.textContent = imagenPeq[posicion].dataset.name
})

flechaIzquierda.addEventListener("click", (e) => {
    if (posicion ==0)
    posicion = imagenPeq.length;
    posicion--
    imagen.src = imagenPeq[posicion].src
    title.textContent = imagenPeq[posicion].dataset.name
})  

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    carrucel.style.display = "none";
  } else {
    carrucel.style.display = "flex";
  }
});

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    carrucel.style.display = "none";
    document.body.classList.add("no-scroll"); // BLOQUEA SCROLL
  } else {
    carrucel.style.display = "flex";
    document.body.classList.remove("no-scroll"); // DESBLOQUEA SCROLL
  }
});
