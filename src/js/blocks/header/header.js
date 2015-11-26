(function() {
  var headerTitle = document.querySelector(".main-navigation__title");
  var headerTitleToggle = document.querySelector(".main-navigation__title .toggle");
  var headerTitleMenu = document.querySelector(".main-navigation__menu");
  
  if (headerTitle && headerTitleToggle && headerTitleMenu) {
    
    if (window.matchMedia("(max-width: 767px)").matches) {
      
      headerTitle.addEventListener("click", function(event) {
        event.preventDefault();
        headerTitleToggle.classList.toggle("toggle--opened");
        headerTitleMenu.classList.toggle("main-navigation__menu--opened");
      });
    }
    
  }
}
)();