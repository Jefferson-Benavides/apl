const sidebar = document.getElementById('sidebar');
const arrowContainer = document.querySelector('.arrow-container');

let isSidebarExpanded = true;

function toggleSidebar() {
    isSidebarExpanded = !isSidebarExpanded;

    sidebar.classList.toggle('expanded', isSidebarExpanded);
    sidebar.classList.toggle('collapsed', !isSidebarExpanded);
}
