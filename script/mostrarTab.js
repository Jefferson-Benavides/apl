function mostrarOcultarTabs() {
            
  var hrefValue = event.target.getAttribute('href');

  var tabContents = document.getElementsByClassName('tab-content');
  
  for (var i = 0; i < tabContents.length; i++) {
      if (tabContents[i].getAttribute('id') === hrefValue.slice(1)) {
          tabContents[i].style.display = 'block';
      } else {
          tabContents[i].style.display = 'none';
      }
  }
}