(function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
})();


  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Select all form-floating elements
    const floatingInputs = document.querySelectorAll('.form-floating');

    // Add focus event listeners to each form-floating element
    floatingInputs.forEach(function(floatingInput) {
      const input = floatingInput.querySelector('.form-control');
      const label = floatingInput.querySelector('label');

      // Add focus event listener to the input field
      input.addEventListener('focus', function() {
        // Change the color of the floating label text when input is focused
        label.classList.add('focused');
      });

      // Add blur event listener to the input field
      input.addEventListener('blur', function() {
        // If the input is empty, remove the focused class from the label
        if (input.value.trim() === '') {
          label.classList.remove('focused');
        }
      });
    });
  });