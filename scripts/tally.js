document.addEventListener("DOMContentLoaded", function () {
  // Initialize tally display
  var tallyDisplay = document.getElementById("tally-display");
  tallyDisplay.value = "00";

  // Event listener for the Refresh button
  document.getElementById("btn-refresh").addEventListener("click", function () {
    tallyDisplay.value = "00";
  });

  // Event listener for the Minus button
  document
    .getElementById("btn-minus-tally")
    .addEventListener("click", function () {
      // Get the current tally count as an integer
      var currentCount = parseInt(tallyDisplay.value, 10);

      // Decrement the count (if greater than 0)
      if (currentCount > 0) {
        currentCount--;
        // Format the count to always display two digits
        tallyDisplay.value = currentCount.toString().padStart(2, "0");
      }
    });

  // Event listener for the Plus button
  document
    .getElementById("btn-plus-tally")
    .addEventListener("click", function () {
      // Get the current tally count as an integer
      var currentCount = parseInt(tallyDisplay.value, 10);

      // Increment the count
      currentCount++;
      // Format the count to always display two digits
      tallyDisplay.value = currentCount.toString().padStart(2, "0");
    });
});
