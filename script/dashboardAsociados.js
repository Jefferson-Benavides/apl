function cargarDatos() {
    fetch('/data/asociados.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#tabla-asociados tbody');
        data.forEach(item => {
          let cuotasPorPagar = item.cuotas_asociado.filter(
            cuota => cuota.estado === "SIN PAGAR").length;
          const row = document.createElement('tr');
          row.innerHTML = `
            <td><a href="/pages/detalle-asociado.html?id=${item.id_asociado}&tab=info">${item.nombres_asociado + " " + item.apellidos_asociado}</a></td>
            <td>${item.numero_identificacion_asociado}</a></td>
            <td>${item.estado_asociado}</a></td>
            <td><a href="/pages/detalle-asociado.html?id=${item.id_asociado}&tab=lotes">${item.lotes_asociado.length}</a></td>
            <td><a href="/pages/detalle-asociado.html?id=${item.id_asociado}&tab=cuotas">${cuotasPorPagar}</a></td>
            <td><a href="/pages/detalle-asociado.html?id=${item.id_asociado}&tab=asambleas">${item.asistencias_asambleas_asociado.filter(
              asamblea => asamblea.asistencia === "NO ASISTIÓ").length}</a></td>
          `;
          row.setAttribute('data-id_asociado', item.id_asociado)
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error al cargar los datos: ', error));
  }

  cargarDatos(); 
