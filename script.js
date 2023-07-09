document.addEventListener("DOMContentLoaded", function() {
    var loader = document.querySelector(".loader");
    var userList = document.getElementById("userList");
  
    // Display the loader initially
    loader.style.display = "block";
    userList.style.display = "none";
  
    // Fetch data from JSON Placeholder API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Hide the loader and display the fetched data
        loader.style.display = "none";
        userList.style.display = "block";
  
        // Process the fetched data
        data.forEach(function(user) {
          var listItem = document.createElement("li");
          listItem.classList.add("user-item");
          listItem.textContent = user.name;
          userList.appendChild(listItem);
        });
      })
      .catch(function(error) {
        // Handle any errors
        console.log(error);
      });
  });
  