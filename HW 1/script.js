console.log('Hello world!');

document.addEventListener("DOMContentLoaded", () => {
    const votes = [0, 0, 0, 0, 0];
    const buttons = document.querySelectorAll(".emoji-button");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const index = button.getAttribute("data-index");
        votes[index]++;
        document.getElementById(`count-${index}`).textContent = votes[index];
      });
    });
  });