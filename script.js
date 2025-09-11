//Constante  que almacena el elemento con ID = "imagenGrande" (Las flechitas y la x)
const imagenGrande = document.getElementById("imagenGrande")
let title = document.getElementById("title")
//Constante que almacena el elemento con ID = "imagen" (Que sería la imagen de fondo)
const imagen = document.getElementById ("imagen") 
const flechaIzquierda = document.getElementById("flechaIzquierda")
const flechaDerecha = document.getElementById("flechaDerecha")
const equisCerrar = document.getElementById("equisCerrar")
/* La linea siguiente transforma cada elemento con class "imagenPeq" como un elemento de un arreglo */
let imagenPeq = [... document.querySelectorAll(".imagenPeq")]
//los 3 puntos es para q traiga todos los elementos (12) como arreglos individuales
const toggle = document.getElementById("menu-input");
const carrucel = document.getElementById("carrucel");

//Definimos variable para almacenar la posición de la imagen a la que le damos click
let posicion = 0

//Recoger todos los elementos en un arreglo
//La i representa la posición de cada uno de los elementos
imagenPeq.forEach((elemento, i) =>{

    //Para cada imagen, agrega un evento click
    elemento.addEventListener("click", (e) => {

        //Mostrar en el elemento la imagen que se almacenó en imagenGrande al darle click
        posicion = i;

        //Mostrar en el elemento imagen de imagenGrande a la que se le da click
        imagenGrande.style.display = "flex"
        imagen.src = elemento.src
        console.log(posicion)
        // let titulo = elemento.dataset.name
        title.textContent = elemento.dataset.name;
        // console.log(titulo)
        // console.log(title)
    })
});

//Se oculta la imagen grande al dar click sobre la x
equisCerrar.addEventListener("click", (e) => {

    imagenGrande.style.display = "none"
})

flechaDerecha.addEventListener("click", (e) => 
{
    /*Esta preguntando si esta en la posicion 11, puede cambiar el imagenPeq.length por el 11
     El imagenPeq.length se traduce como "cantidad de imagenes que tenemos" (12, por el 0) y le restamos 1, que seria 11.
     */
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
