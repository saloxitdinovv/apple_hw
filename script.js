let btns = document.querySelectorAll(".btnss");
let img = document.querySelector(".img_phone");
let colorText = document.querySelector(".col");

let current = 'Color'


const images = {
  'Purple': "./img/black.png",
  'Gold': "./img/goldish.png",
  'Silver': "./img/silverish.png",
  'Space Black': "./img/gray.png",
};

btns.forEach((btn) => {
  const key = btn.getAttribute("data-col");

  btn.onclick = () => {
    btns.forEach((btn) => btn.classList.remove("active"));
    img.setAttribute("src", images[key]);

    btn.classList.add("active");
    current = `Color - ${key}`
    colorText.innerHTML = current
  };

  btn.onmouseenter = () => {
    colorText.innerHTML = `Color - ${key}`;
  };

  btn.onmouseleave = () => {
    colorText.innerHTML = current
  };
})
