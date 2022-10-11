const wrapper = document.querySelector(".menu-wrapper");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
