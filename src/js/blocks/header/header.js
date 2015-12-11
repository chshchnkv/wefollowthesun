(function() {
  var headerTitle = document.querySelector(".main-navigation__title");
  var headerTitleToggle = document.querySelector(".main-navigation__title .toggle");
  var headerTitleMenu = document.querySelector(".main-navigation__menu");
  
  if (headerTitle && headerTitleToggle && headerTitleMenu) {
    
      
      headerTitle.addEventListener("click", function(event) {
        if (window.matchMedia("(max-width: 767px)").matches) {
          event.preventDefault();
          headerTitleToggle.classList.toggle("toggle--opened");
          headerTitleMenu.classList.toggle("main-navigation__menu--opened");
        }
      });
    
  }
}
)();