export const initBackToTopButton = () => {
  const backToTopButton = document.querySelector(".button-back");

  backToTopButton.addEventListener("click", () => {
    window.scrollTo(0, 200);
  });
};
