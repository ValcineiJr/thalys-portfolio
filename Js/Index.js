document.getElementById("menusobre").onclick = function (e) {
  e.preventDefault();
  document.getElementById("sobre").scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

function toggleMenu() {
  console.log("chamei");
  document.getElementById("menu").classList.toggle("show");
}
