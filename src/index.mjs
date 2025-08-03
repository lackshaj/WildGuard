const buttons = document.querySelectorAll("button[data-filter]");
// Select only articles inside the specific container, e.g. '.resources-container'
const container = document.querySelector(".articles-container"); 
const articles = container.querySelectorAll("article");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    articles.forEach((article) => {
      if (filter === "All" || article.classList.contains(filter)) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  });
});


// Thank you alert on click
const submitBtn = document.getElementById("submit-btn");
if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    alert("Thank you for subscribing!");
  });
}

const donateBtn = document.getElementById("donate-btn");
if (donateBtn) {
  donateBtn.addEventListener("click", () => {
    alert("Thank you for donating!");
  });
}
