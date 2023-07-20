// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the create server form
    const createServerForm = document.getElementById("create-server-form");
  
    // Add event listener for form submission
    createServerForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get the form inputs
      const serverNameInput = document.getElementById("server-name");
      const serverDescriptionInput = document.getElementById("server-description");
      const serverRegionInput = document.getElementById("server-region");
      const serverPrivacyInput = document.getElementById("server-privacy");
      const serverThemeInput = document.getElementById("server-theme");
      const serverVerificationInput = document.getElementById("server-verification");
  
      // Retrieve the values from the form inputs
      const serverName = serverNameInput.value;
      const serverDescription = serverDescriptionInput.value;
      const serverRegion = serverRegionInput.value;
      const serverPrivacy = serverPrivacyInput.value;
      const serverTheme = serverThemeInput.value;
      const serverVerification = serverVerificationInput.value;
  
      // Perform the server creation logic and storage
      createServer(serverName, serverDescription, serverRegion, serverPrivacy, serverTheme, serverVerification);
  
      // Reset the form inputs
      createServerForm.reset();
    });
  
    // Function to create and store the server
    function createServer(name, description, region, privacy, theme, verification) {
      // TODO: Implement your server creation and storage logic here
  
      // For demonstration purposes, let's log the server details to the console
      console.log("Server created:");
      console.log("Name:", name);
      console.log("Description:", description);
      console.log("Region:", region);
      console.log("Privacy:", privacy);
      console.log("Theme:", theme);
      console.log("Verification:", verification);
    }
  });
  