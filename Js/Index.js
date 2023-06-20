document.getElementById("menusobre").onclick = function (e) {
  e.preventDefault();
  document.getElementById("sobre").scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

function toggleModal() {
  document.getElementById("my-modal").classList.toggle("show");
}
