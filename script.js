let linkBtn = document.getElementById("linkBtn");
function addLink() {
  document.body.style.overflowX = "hidden";
  let a = linkBtn.classList.toggle("linkBtn1");
  linkBtn.appendChild(a);
}
