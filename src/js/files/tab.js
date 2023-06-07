export default function tab() {
  const buttonsTabs = document.querySelectorAll(".btn-tab");
  const tabs = document.querySelectorAll(".tab");

  if (buttonsTabs.length) {
    buttonsTabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tabId = btn.dataset.tab;
        const currentTab = document.querySelector(`.tab[data-tab="${tabId}"]`)

        buttonsTabs.forEach((btn) => btn.classList.remove("active"));
        tabs.forEach((tab) => tab.classList.remove("active"));

        btn.classList.add("active");
        currentTab.classList.add("active");
      });
    });
  }
}
