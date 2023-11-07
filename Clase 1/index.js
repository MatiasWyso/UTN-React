const tipoSeguro = document.getElementById("tipoSeguro");
const precioSeguro = document.getElementById("precioSeguro");

tipoSeguro.addEventListener("change", function() {
  const valorSeleccionado = tipoSeguro.value;

  if (valorSeleccionado === "basico") {
    precioSeguro.textContent = "Precio: $500";
  } else if (valorSeleccionado === "intermedio") {
    precioSeguro.textContent = "Precio: $1000";
  } else if (valorSeleccionado === "premium") {
    precioSeguro.textContent = "Precio: $1500";
  }
});