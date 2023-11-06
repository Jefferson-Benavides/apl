document.addEventListener('DOMContentLoaded', function () {

    let rutaAsociado = document.querySelector('#rutaAsociado');
    let rutaTab = document.querySelector('#rutaTab')
    let info = document.querySelector('#info');
    let lotes = document.querySelector('#tabla-lotes-asociado tbody');
    var cantidadLotesAsociado = document.querySelector('#cantidad-lotes-asociado')
    let cuotas = document.querySelector('#cuotasAsociado');
    let spanCuotasPorPagar = document.querySelector('#cuotasPorPagar');
    let asambleas = document.querySelector('#tablaAsambleasAsociado')
    let spanInasistenciaAsambleas = document.querySelector('#inasistenciaAsambleas');
    var url = new URL(window.location.href);
    var searchParams = url.searchParams;
    var id = searchParams.get("id");
    let tab = searchParams.get("tab")

    fetch('/data/asociados.json')
        .then(response => response.json())
        .then(data => {

            var detalleAsociadoInfo = document.createElement('div');

            for (let i = 0; i < data.length; i++) {

                if (data[i].id_asociado == id) {
                    rutaAsociado.append(data[i].nombres_asociado + " " + data[i].apellidos_asociado);
                    rutaTab.append(tab === "info" ? "Información personal" : tab.charAt(0).toUpperCase() + tab.slice(1));
                    detalleAsociadoInfo.innerHTML = `
                            <div class="grupo"><label>Nombres:</label>
                            <input type="text" name="" id="" value="${data[i].nombres_asociado}"></div>
                            <div class="grupo"><label>Apellidos:</label>
                            <input type="text" name="" id="" value="${data[i].apellidos_asociado}"></div>
                            <div class="grupo"><label>Identificación:</label>
                            <input type="text" name="" id="" value="${data[i].numero_identificacion_asociado}"></div>
                            <div class="grupo"><label>Estado:</label>
                            <input type="text" name="" id="" value="${data[i].estado_asociado}"></div>
                            <div class="grupo"><label>Contacto:</label><input type="text" name="" id="" value="${data[i].contacto_asociado.telefono}"></div>
                <div class="grupo"><label>Correo:</label><input type="text" name="" id="" value="${data[i].contacto_asociado.correo}"></div>
                <div class="grupo"><label>Lugar de residencia:</label><input type="text" name="" id="" value="${`${data[i].domicilio_asociado.departamento}, ${data[i].domicilio_asociado.ciudad}`}"></div>
                <div class="grupo"><label>Dirección:</label><input type="text" name="" id="" value="${data[i].domicilio_asociado.barrio_vereda}, ${data[i].domicilio_asociado.direccion}"></div>
                        `;
                    cantidadLotesAsociado.append(data[i].lotes_asociado.length)
                    for (let j = 0; j < data[i].lotes_asociado.length; j++) {

                        let detalleAsociadoLotes = document.createElement('tr');
                        detalleAsociadoLotes.innerHTML += `
                            <td>${data[i].lotes_asociado[j].Etapa_lote}</td>
                            <td>${data[i].lotes_asociado[j].Manzana_lote}</td>
                            <td>${data[i].lotes_asociado[j].Codigo_lote}</td>
                            <td>${data[i].lotes_asociado[j].Predial_lote}</td>
                            <td>${data[i].lotes_asociado[j].Construccion_lote}</td>
                            <td><a href="">N/A</a></td>
                            `;
                        lotes.appendChild(detalleAsociadoLotes);
                    }

                    let cuotasPorPagar = data[i].cuotas_asociado.filter(
                        cuota => cuota.estado === "SIN PAGAR").length;
                    let svgEye = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                  </svg>
                    `;

                    for (let k = 0; k < data[i].cuotas_asociado.length; k++) {
                        let detalleAsociadoCuotas = document.createElement('tr');
                        detalleAsociadoCuotas.innerHTML += `
                            <td>${data[i].cuotas_asociado[k].fecha_aprobacion}</td>
                            <td>${data[i].cuotas_asociado[k].motivo}</td>
                            <td>$${data[i].cuotas_asociado[k].valor.toLocaleString()}</td>
                            <td>${data[i].cuotas_asociado[k].estado}</td>
                            <td>${data[i].cuotas_asociado[k].comprobante}</td>
                            <td class="fechaComprobante">${data[i].cuotas_asociado[k].fecha_comprobante}${data[i].cuotas_asociado[k].estado === "PAGADA" ? svgEye : "----"}</td>
                            `;
                        cuotas.appendChild(detalleAsociadoCuotas);
                    }
                    spanCuotasPorPagar.append(cuotasPorPagar);

                    let inasistenciaAsambleas = data[i].asistencias_asambleas_asociado.filter(
                        asamblea => asamblea.asistencia === "NO ASISTIÓ").length;
                    for (let l = 0; l < data[i].asistencias_asambleas_asociado.length; l++) {
                        let detalleAsociadoAsambleas = document.createElement('tr');
                        detalleAsociadoAsambleas.innerHTML += `
                            <td>${data[i].asistencias_asambleas_asociado[l].fecha_realizacion}</td>
                            <td>${data[i].asistencias_asambleas_asociado[l].asunto}</td>
                            <td class="asistencia">${data[i].asistencias_asambleas_asociado[l].asistencia === "FIRMADA" ? "FIRMADA" + svgEye : "----"}</td>
                            `;
                        asambleas.append(detalleAsociadoAsambleas);
                    }
                    spanInasistenciaAsambleas.append(inasistenciaAsambleas);
                    break;
                }
            }

            info.appendChild(detalleAsociadoInfo);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });

});
