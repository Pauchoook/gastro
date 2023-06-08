export default function switchPages() {
  const btnPartnes = document.querySelector(".header__switch-link--partners");
  const btnUsers = document.querySelector(".header__switch-link--users");
  const switchBtn = document.querySelector(".header__switch-btn");

  if (switchBtn) {
    const url = window.location.href;
    const isPartners = url.includes("partners");

    if (isPartners) {
      btnPartnes.classList.add("active");
      switchBtn.classList.add("_partners");
    } else {
      btnUsers.classList.add("active");
    }

    switchBtn.addEventListener("click", () => {
      let href = "";

      if (switchBtn.classList.contains("_partners")) {
        href = btnUsers.href;
        switchBtn.classList.remove("_partners");
      } else {
        href = btnPartnes.href;
        switchBtn.classList.add("_partners");
      }

      setTimeout(() => {
        const a = document.createElement("a");
        a.href = href;
        a.click();
      }, 300);
    });
  }
}
