// Optional JavaScript to continuously scroll the partners horizontally
const partnersContainer = document.querySelector('.partners-container');
let scrollAmount = 0;
const scrollInterval = setInterval(() => {
  partnersContainer.scrollLeft = scrollAmount;
  scrollAmount += 1;
  if (scrollAmount > partnersContainer.scrollWidth) {
    scrollAmount = 0; // Reset to beginning
  }
}, 20);
