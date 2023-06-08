export default function modal() {
  //закрытие
  const buttonsClose = document.querySelectorAll(".modal__close");

  buttonsClose.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentModal = btn.closest(".modal");

      currentModal.classList.add("hide");

      setTimeout(() => {
        currentModal.classList.remove("open");
        currentModal.classList.remove("hide");
        document.body.classList.remove("body-hidden");
      }, 500);
    });
  });
}
