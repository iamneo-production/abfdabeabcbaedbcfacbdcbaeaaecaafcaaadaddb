document.addEventListener('DOMContentLoaded', function() {
    // Get references to the form and form elements
    var registrationForm = document.querySelector('form');
    var fullNameInput = document.getElementById('fullName');
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var phoneNumberInput = document.getElementById('phoneNumber');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var bioInput = document.getElementById('bio');
    var profilePictureInput = document.getElementById('profilePicture');

    // Event listener for form submission
    registrationForm.addEventListener('submit', function(event) {
      // Prevent the form from submitting
      event.preventDefault();

      // Perform form validation
      var isValid = validateForm();

      // If form is valid, proceed with form submission
      if (isValid) {
        alert('Form submitted successfully!');
        // You can add additional code here to submit the form data to a server
      }
    });

    // Function to validate the form
    function validateForm() {
      var isValid = true;

      // Clear any existing error messages
      clearErrorMessages();

      // Validate full name
      var fullNameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
      if (!fullNameRegex.test(fullNameInput.value.trim())) {
        displayErrorMessage(fullNameInput, 'Please enter a valid full name.');
        isValid = false;
      }

      // Validate username
      var usernameRegex = /^[a-zA-Z0-9]+$/;
      if (!usernameRegex.test(usernameInput.value.trim())) {
        displayErrorMessage(usernameInput, 'Please enter a valid username.');
        isValid = false;
      }

      // Validate email
      var emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        displayErrorMessage(emailInput, 'Please enter a valid email address.');
        isValid = false;
      }

      // Validate phone number
      var phoneRegex = /^\d+$/;
      if (!phoneRegex.test(phoneNumberInput.value.trim())) {
        displayErrorMessage(phoneNumberInput, 'Please enter a valid phone number.');
        isValid = false;
      }

      // Validate password
      var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&%$#*()_])[A-Za-z\d&%$#*()_]{8,16}$/;
      if (!passwordRegex.test(passwordInput.value.trim())) {
        displayErrorMessage(
          passwordInput,
          'Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character. Min 8, Max 16 characters.'
        );
        //Weak123@!
        isValid = false;
      }

      // Validate confirm password
      if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        displayErrorMessage(confirmPasswordInput, 'Passwords do not match.');
        isValid = false;
      }

      // Validate bio
      var bioRegex = /^[a-zA-Z0-9 ,.'"]*$/;
      if (!bioRegex.test(bioInput.value.trim())) {
        displayErrorMessage(
          bioInput,
          'Bio can only contain alphanumeric characters, space, comma, full stop, single quotes, and double quotes.'
        );
        isValid = false;
      }

      // Validate profile picture
      var profilePicFile = profilePictureInput.files[0];
      if (profilePicFile) {
        var allowedExtensions = ['jpg', 'jpeg', 'png'];
        var fileSizeLimit = 5 * 1024 * 1024; // 5MB in bytes

        var fileExtension = profilePicFile.name.split('.').pop().toLowerCase();
        var fileSize = profilePicFile.size;

        if (!allowedExtensions.includes(fileExtension) || fileSize > fileSizeLimit) {
          displayErrorMessage(
            profilePictureInput,
            'Please upload a profile picture in JPG or PNG format, up to 5MB in size.'
          );
          isValid = false;
        }
      }

      return isValid;
    }

    // Function to display an error message for a specific input field
    function displayErrorMessage(inputElement, message) {
      var errorContainer = document.createElement('div');
      errorContainer.className = 'error-message';
      errorContainer.textContent = message;
      errorContainer.style.color = 'red'; // Add this line to set the color to red
      inputElement.parentNode.appendChild(errorContainer);
    }

    // Function to clear all error messages
    function clearErrorMessages() {
      var errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach(function(errorMessage) {
        errorMessage.parentNode.removeChild(errorMessage);
      });
    }
  });