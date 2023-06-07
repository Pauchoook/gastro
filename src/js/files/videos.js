export default function videos() {
  const videoButtons = document.querySelectorAll(".video-player__btn");

  if (videoButtons.length) {
    videoButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".video-player");
        const currentVideo = parent.querySelector(".video-player__video");

        btn.remove();
        currentVideo.play();
        currentVideo.setAttribute("controls", "");
      });
    });
  }
}