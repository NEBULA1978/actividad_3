/*
Único bucle posible: for of
Sin usar: find, findIndex, indexOf, map
<>
*/
// Creamos el Index.html con javascript
document.querySelector("body").innerHTML = '<select></select><div class="actividad"></div>';

for (dato of datos) {
  document.querySelector("select").insertAdjacentHTML("beforeend", `<option>
    ${dato.tecnologia}
  </option> `)
}
document.querySelector("select").onchange = buscar;

function buscar() {
  const aBuscar = document.querySelector("select").value;
  let indice = 0
  for (let dato of datos) {
    if (dato.tecnologia === aBuscar) {
      // Para poder utilizar varible local fuerade la funcion
      mostrar(dato, indice)
      break
    }
    indice++;
  }
}
// Creamos variable local en la funcion e arriba y llamamos aqui
function mostrar(dato, indice) {
  // COnvertimos el objeto en array
  const array = Object.values(dato)
  document.querySelector(".actividad").innerHTML = "<div class='conBorde'></div>"


  for (valor of array) {
    document.querySelector(".conBorde").insertAdjacentHTML("beforeend", `
    <div>${valor}</div> 
    `)

  }

  document.querySelector(".actividad").insertAdjacentHTML("beforeend", `
    <div class="conBorde">
      En <strong>${dato.nacimiento}</strong> nacio <strong>${dato.tecnologia}</strong> (Indice: 
        # ${indice})
    </div> 
    `)
}
