function collectCustomerInfo() {
    // Get the values of the input fields
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
  
    // Store the values in variables
    var customerName = name;
    var customerPassword = password;
  
    // Output the values to the console for testing
    console.log("Customer name: " + customerName);
    console.log("Customer password: " + customerPassword);
  }