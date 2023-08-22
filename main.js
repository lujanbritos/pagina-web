// Script para agregar funcionalidad a la barra lateral

// Obtener la lista de la barra lateral
var sidebarList = document.getElementById('sidebarList');

// Obtener todos los elementos de la lista
var sidebarItems = sidebarList.getElementsByTagName('a');

// Agregar un evento click a cada elemento de la lista
for (var i = 0; i < sidebarItems.length; i++) {
  sidebarItems[i].addEventListener('click', function() {
    // Remover la clase 'active' de todos los elementos
    for (var j = 0; j < sidebarItems.length; j++) {
      sidebarItems[j].classList.remove('active');
    }

    // Agregar la clase 'active' al elemento seleccionado
    this.classList.add('active');
  });
}
