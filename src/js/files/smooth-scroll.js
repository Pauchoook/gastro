export default function smoothScroll() {
  document.querySelectorAll('a[href*="#"]').forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const blockID = btn.getAttribute("href").substring(1);
      const yOffset = -74;
      const element = document.getElementById(blockID);

      if (element) {
        e.preventDefault();
      } else {
        return;
      }

      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      const burgerBtn = document.querySelector("#burger-btn");
      const burgerMenu = document.querySelector("#burger-menu");

      if (burgerMenu.classList.contains("open")) {
        burgerBtn.classList.remove("active");
        burgerMenu.classList.remove("open");
        document.body.classList.remove("body-hidden");
      }

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
}
