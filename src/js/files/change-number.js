export default function changeNumber() {
  const buttons = document.querySelectorAll(".form__number-btn");

  if (buttons.length) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".form__parent-number");
        const input = parent.querySelector(".form__input--number");
        const inputValue = Number(input.value);

        if (btn.classList.contains("form__number-btn--plus")) {
          input.value = inputValue + 1;
        } else {
          if (inputValue > 1) {
            input.value = inputValue - 1;
          }
        }
      });
    });
  }
}