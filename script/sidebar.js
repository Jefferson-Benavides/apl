const sidebar = document.getElementById('sidebar');
const arrowContainer = document.querySelector('.arrow-container');

// Estado inicial del sidebar (expandido)
let isSidebarExpanded = true;

// Función para cambiar el estado del sidebar
function toggleSidebar() {
    isSidebarExpanded = !isSidebarExpanded;

    // Cambia las clases para aplicar los estilos correspondientes
    sidebar.classList.toggle('expanded', isSidebarExpanded);
    sidebar.classList.toggle('collapsed', !isSidebarExpanded);
}

// Escucha el evento clic en el contenedor de la flecha
arrowContainer.addEventListener('click', toggleSidebar);
