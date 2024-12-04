$(document).ready(function() {
    // Declare the names array outside the functions so it's accessible everywhere in this scope
    const names = [];
  
    // When the 'Add Name' button is clicked
    $('#addButton').click(function() {
      const name = $('#nameInput').val().trim(); // Get the name entered by the user
      if (name) {
        names.push(name); // Add name to the list
        names.sort(); // Sort names in ascending order
        displayNames(); // Display the names
        $('#nameInput').val(''); // Clear the input field
      } else {
        alert('Please enter a valid name.');
      }
    });
  
    // Function to display names in the list
    function displayNames() {
      const $list = $('#nameList');
      $list.empty(); // Clear any existing names
  
      // Iterate through the names array and append each name as an <li>
      names.forEach(function(name) {
        $list.append(`<li>${name}</li>`);
      });
    }
  });
  