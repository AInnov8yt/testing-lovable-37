document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("clickMe");
  const output = document.getElementById("output");
  let count = 0;

  button.addEventListener("click", function() {
    count++;
    output.textContent = count;
  });
});