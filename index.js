

function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const heightInches = (height * 12);
    const bmi = weight / (heightInches * heightInches) * 703;
    document.getElementById("result").innerHTML = bmi.toFixed(2);
}

// script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the toggle checkbox element
    const toggleCheckbox = document.getElementById('toggle');
  
    // Get the navbar menu element
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.add('expanded');
  
    // Add an event listener to the toggle checkbox
    toggleCheckbox.addEventListener('change', function () {
      // Check if the toggle checkbox is checked
      if (toggleCheckbox.checked) {
        // Add the 'expanded' class to show the navbar menu
        navbarMenu.classList.add('expanded');
      } else {
        // Remove the 'expanded' class to hide the navbar menu
        navbarMenu.classList.remove('expanded');
      }
    });
  });
  