const bodyEL = document.querySelector("body");

bodyEL.addEventListener("mousemove", (Event) => {
  const xpos = event.offsetX;
  const ypos = event.offsetY;
  const spanEL = document.createElement("span");
  spanEL.style.left = xpos + "px";
  spanEL.style.top = ypos + "px";
  const size = Math.random() * 100;
  spanEL.style.width = size + "px";
  spanEL.style.height = size + "px";
  bodyEL.appendChild(spanEL);
  setTimeout(() => {
    spanEL.remove();
  }, 3000);
});
