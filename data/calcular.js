 
let cuotasJS = [
    {
        id_cuota: 1,
        id_asamblea: 1,
        fecha_aprobacion: "05-junio-2020",
        motivo: "Mantenimiento del polideportivo",
        valor: 40000,
        estado: "PAGADA",
        comprobante: 18795,
        fecha_comprobante: "13-enero-2021"
    },
    {
        id_cuota: 2,
        id_asamblea: 2,
        fecha_aprobacion: "03-junio-2021",
        motivo: "Compra de postes de energía",
        valor: 55000,
        estado: "PAGADA",
        comprobante: 0,
        fecha_comprobante: ""
    },
    {
        id_cuota: 3,
        id_asamblea: 3,
        fecha_aprobacion: "01-julio-2022",
        motivo: "Jardinería",
        valor: 25000,
        estado: "SIN PAGAR",
        comprobante: 28796,
        fecha_comprobante: "13-enero-2021"
    }]

function calcular() {
    let cuotasPorPagar = 0;
    for (let i = 0; i < cuotasJS.length; i++) {
        if (cuotasJS[i].estado == "SIN PAGAR") {
            cuotasPorPagar++;
        }
}
return cuotasPorPagar;
}

console.log(calcular());

let cuotasPorPagar = cuotasJS.filter(cuota => cuota.estado === "SIN PAGAR").length;
let cuotasPagadas = cuotasJS.filter(cuota => cuota.estado === "PAGADA").length;

console.log(`POR PAGAR: ${cuotasPorPagar}`);
console.log(`PAGADAS: ${cuotasPagadas}`);
