  const buscarAsociado = document.getElementById("buscarAsociado");
  const buscarIdentificacion = document.getElementById('buscarIdentificacion')
  const estadoSelect = document.getElementById("estadoAsociado");
  const lotesSelect = document.getElementById("lotesAsociado");
  const cuotasSelect = document.getElementById("cuotasAsociado");
  const ausenciasSelect = document.getElementById("ausenciasAsociado");
  const filas = document.querySelectorAll("tbody tr");
  const mensajeNoCoincidencias = document.getElementById("mensajeNoCoincidencias");
  const limpiarFiltrosBtn = document.getElementById("limpiarFiltros");

  function quitarTildes(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function filtrarFilas() {
    const filtroAsociado = quitarTildes(buscarAsociado.value.toLowerCase().trim());
    const filtroIdentificacion = quitarTildes(buscarIdentificacion.value.toLowerCase().trim());
    const filtroEstado = estadoSelect.value;
    const filtroLotes = lotesSelect.value;
    const filtroCuotas = cuotasSelect.value;
    const filtroAusencias = ausenciasSelect.value;

    let algunaCoincidencia = false;

    filas.forEach(function (fila) {
      if (fila === buscarAsociado.parentNode.parentNode) {
        fila.style.display = "";
      } else {
        const datos = fila.querySelectorAll("td");
        console.log(datos);
        const textoFila = datos[0].textContent.toLowerCase();
        const identificacionFila = datos[1].textContent.toLowerCase();
        const estadoFila = datos[2].textContent;
        const lotesFila = datos[3].textContent;
        const cuotasFila = datos[4].textContent;
        const ausenciasFila = datos[5].textContent;

        const filaVisible =
          textoFila.includes(filtroAsociado) && identificacionFila.includes(filtroIdentificacion) &&
          (filtroEstado === "Todos" || estadoFila === filtroEstado) &&
          (filtroLotes === "Todos" || lotesFila === filtroLotes) &&
          (filtroCuotas === "Todos" || cuotasFila === filtroCuotas) &&
          (filtroAusencias === "Todos" || ausenciasFila === filtroAusencias);

        if (filaVisible) {
          fila.style.display = "";
          algunaCoincidencia = true;
        } else {
          fila.style.display = "none";
        }
      }
    });
    mensajeNoCoincidencias.style.display = algunaCoincidencia ? "none" : "block";

  }

  buscarAsociado.addEventListener("input", filtrarFilas);
  buscarIdentificacion.addEventListener("input", filtrarFilas);
  estadoSelect.addEventListener("change", filtrarFilas);
  lotesSelect.addEventListener("change", filtrarFilas);
  cuotasSelect.addEventListener("change", filtrarFilas);
  ausenciasSelect.addEventListener("change", filtrarFilas);

  limpiarFiltrosBtn.addEventListener("click", function () {
    buscarAsociado.value = "";
    buscarIdentificacion.value = "";
    estadoSelect.value = "Todos";
    lotesSelect.value = "Todos";
    cuotasSelect.value = "Todos";
    ausenciasSelect.value = "Todos";

    filtrarFilas(); 
  });

