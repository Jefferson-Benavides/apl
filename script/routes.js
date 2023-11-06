document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const activeTab = urlParams.get("tab");
    if (activeTab) {
      // Oculta todas las pestañas y luego muestra la pestaña activa
      const tabContents = document.querySelectorAll(".tab-content");
      tabContents.forEach((tab) => (tab.style.display = "none"));
      document.getElementById(activeTab).style.display = "block";
    }
  });
          
        
        // function obtenerIDDesdeURL() {
        //     var ids = [];
        //     var url = window.location.href; 
        //     var urlParts = url.split("-"); 
        //     var id = urlParts[urlParts.length - 1]; 
        //     var nuevaURL = url.substring(0, url.lastIndexOf("-"));
            
        //     var urlTab = nuevaURL.split("#")
        //     var idBtn = urlTab[urlTab.length - 1];
        //     var nuevaURLnoTab = urlTab.substring(0, urlTab.lastIndexOf("#"));
            
        //     window.location.href = nuevaURLnoTab;

        //     return ids.push(id, idBtn);
        // }
        
        // function cargarDatosDesdeJSON() {
        //     var id = obtenerIDDesdeURL([0]); 
        //     var idBtn = obtenerIDDesdeURL([1])

        //     fetch('asociados.json') 
        //         .then(response => response.json())
        //         .then(data => {
        //             var objetoAsociado = data.find(obj => obj.id === id);
        //             if (objetoAsociado) {
                        
        //                 document.getElementById('nombre').textContent = objetoAsociado.nombre;
        //                 document.getElementById('descripcion').textContent = objetoAsociado.descripcion;
                        
        //             } else {
        //                 console.log('No se encontró ningún objeto con el ID especificado.');
        //             }
        //         })
        //         .catch(error => {
        //             console.error('Error al cargar el archivo JSON:', error);
        //         });
        //         idBtn.click();
        // }

        // cargarDatosDesdeJSON(); 
   