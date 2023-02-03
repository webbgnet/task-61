import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
 Array.from(document.querySelectorAll('.hot'))
.forEach(hot => {
  hot.innerHTML += '🔥';
})
});

