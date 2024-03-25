
//FOR VALIDATION
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

//FOR LOG-IN

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


  
  //FOR DASHBOARD 

  // Get all tab links and tab content elements
  const tabLinks = document.querySelectorAll('.nav-link');
  const tabContents = document.querySelectorAll('.tab-pane');

  // Add click event listener to each tab link
  tabLinks.forEach(link => {
      link.addEventListener('click', () => {
          // Hide all tab contents
          tabContents.forEach(content => {
              content.classList.remove('show', 'active');
          });

          // Show the corresponding tab content
          const targetId = link.getAttribute('data-bs-target').slice(1); // Get target ID without '#'
          const targetContent = document.getElementById(targetId);
          targetContent.classList.add('show', 'active');
      });
  });

  window.addEventListener('resize', function() {
    var containerDiv = document.getElementById('responsive-container');
    if (window.innerWidth > 576) {
        containerDiv.classList.add('container');
    } else {
        containerDiv.classList.remove('container');
    }
});

//FOR STUDENT REGISTRATION
function suffixValidation() {
  var suffixSelect = document.getElementById('validationStudent-suffix');
  if (suffixSelect.value == null || suffixSelect.value == "") {
    suffixSelect.classList.add('is-invalid');
    return false;
  } else {
    suffixSelect.classList.remove('is-invalid');
    return true;
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

//FOR STUDENT BIRTH DATE

// Populate the Date dropdown
var dateDropdown = document.getElementById("date");
for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.text = i;
  option.value = i;
  dateDropdown.add(option);
}

      // Populate the Year dropdown
var yearDropdown = document.getElementById("year");
var currentYear = new Date().getFullYear();
for (var i = 1900; i <= currentYear; i++) {
  var option = document.createElement("option");
  option.text = i;
  option.value = i;
  yearDropdown.add(option);
}

//FOR ANIMATION OF CLICKABLE BASIC INFORMATION / ACADEMIC BACKGROUND ETC..
document.addEventListener("DOMContentLoaded", function() {
  // Get all list items
  var listItems = document.querySelectorAll('.list-group-item');

  // Loop through each list item and add click event listener
  listItems.forEach(function(listItem) {
    listItem.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor link behavior
      var targetId = this.getAttribute('href'); // Get the target tab pane ID from href attribute
      var targetPane = document.querySelector(targetId); // Find the target tab pane

      // Toggle display of the target tab pane
      if (targetPane.style.display === 'none' || targetPane.style.display === '') {
        targetPane.style.display = 'block';
      } else {
        targetPane.style.display = 'none';
      }
      
      // Remove the 'active' class from all list items
      listItems.forEach(function(item) {
        item.classList.remove('active');
      });
      
      // Add 'active' class to the clicked list item
      this.classList.add('active');
    });
  });
});
//FOR PHONE NUMBER OF CONTACT PERSON
document.getElementById('typePhone').addEventListener('input', function(event) {
  formatPhoneNumber(event.target);
});

function formatPhoneNumber(input) {
  let phoneNumber = input.value.replace(/\D/g, '');
  
  if (phoneNumber.length === 10) { // Mobile number
    phoneNumber = phoneNumber.replace(/(\d{3})(\d{7})/, '$1-$2');
  } else if (phoneNumber.length === 7) { // Landline number
    phoneNumber = phoneNumber.replace(/(\d{3})(\d{4})/, '$1-$2');
  }
  
  input.value = phoneNumber;
}