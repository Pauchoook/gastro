export default function headerScroll() {
  const header = document.querySelector(".header");
  
  if (header) {
    const height = header.clientHeight;

    window.addEventListener("scroll", (e) => {
      const currentY = window.scrollY;

      if (currentY > height) {
        header.classList.add("header-scroll");
      } else {
        header.classList.remove("header-scroll");
      }
    });
  }
}
