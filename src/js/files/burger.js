export default function burger() {
  const burgerBtn = document.querySelector("#burger-btn");
  const burgerMenu = document.querySelector("#burger-menu");

  if (burgerBtn) {
    burgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      burgerBtn.classList.toggle("active");
      burgerMenu.classList.toggle("open");
      document.body.classList.toggle("body-hidden");

      burgerMenu.addEventListener("click", (e) => e.stopPropagation());
      document.addEventListener("click", handleDocument);
    });

    function handleDocument(e) {
      burgerBtn.classList.remove("active");
      burgerMenu.classList.remove("open");
      document.body.classList.remove("body-hidden");

      return document.removeEventListener("click", handleDocument);
    }
  }
}
