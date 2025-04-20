document.querySelectorAll(".thumbnails__item").forEach(item => {
  item.addEventListener("click", function () {
    const state = Flip.getState(".thumbnails__img");

    const mainImageContainer = document.querySelector(".thumbnails__main");
    const mainImage = mainImageContainer.querySelector("img");
    const clickedImage = this.querySelector("img");

    mainImageContainer.appendChild(clickedImage);
    this.appendChild(mainImage);

    Flip.from(state, {
      duration: 1.1,
      ease: "power3.out",
    });
  });
});
