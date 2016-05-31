(function() {
  var inputs = document.querySelectorAll(".switcher__item input[type='radio']");

  if (inputs.length > 0) {
    for (var i=0; i<inputs.length; i++) {
      initInput(inputs[i]);
    }
    
    function initInput(inp) {
      if (inp != null) {
        inp.addEventListener("change", function() {
          
          inp.parentElement.classList.toggle("switcher__item--selected");
        });
      }
    }
    
  }
  
}
)();