let btns = document.querySelectorAll(".btnss");
let img = document.querySelector(".img_phone");
let colorText = document.querySelector(".col");

let current = "Color";

const images = {
  Purple: "./img/black.png",
  Gold: "./img/goldish.png",
  Silver: "./img/silverish.png",
  "Space Black": "./img/gray.png",
};

btns.forEach((btn) => {
  const key = btn.getAttribute("data-col");

  btn.onclick = () => {
    btns.forEach((btn) => btn.classList.remove("active"));
    img.setAttribute("src", images[key]);

    btn.classList.add("active");
    current = `Color - ${key}`;
    colorText.innerHTML = current;
  };

  btn.onmouseenter = () => {
    colorText.innerHTML = `Color - ${key}`;
  };

  btn.onmouseleave = () => {
    colorText.innerHTML = current;
  };
});

let acardion = document.querySelectorAll(".accardion");

acardion.forEach((item) => {
  let header = item.querySelector(".acardion_head");
  let content = item.querySelector(".acardion_content");
  let arrowIcon = item.querySelector(".arrow_acardion");

  header.onclick = () => {
    content.classList.toggle("actived");
    if (content.classList.contains("actived")) {
      content.style.display = "block";
      arrowIcon.style.transform = "scale(-1)";

      setTimeout(() => {
        content.style.opacity = '1'
      }, 300);
    } else {
      content.style.display = "none";
      arrowIcon.style.transform = "scale(1)";

      setTimeout(() => {
        content.style.opacity = '1'
      }, 300);
    }
  };
});

let att = document.querySelector(".att");
let t_mobile = document.querySelector(".t_mobile");
let verizon = document.querySelector(".verizon");
let text = document.querySelector(".changing");

att.onclick = () => {
  att.setAttribute("src", "./img/att_active.png");
  t_mobile.setAttribute("src", "./img/t-mobile.png");
  verizon.setAttribute("src", "./img/verizon.png");

  text.innerText = "For existing and new AT&T customers";
};

t_mobile.onclick = () => {
  t_mobile.setAttribute("src", "./img/t-mobile_active.png");
  att.setAttribute("src", "./img/att.png");
  verizon.setAttribute("src", "./img/verizon.png");

  text.innerText = "For existing T-Mobile customers";
};

verizon.onclick = () => {
  verizon.setAttribute("src", "./img/verizon_active.png");
  att.setAttribute("src", "./img/att.png");
  t_mobile.setAttribute("src", "./img/t-mobile.png");

  text.innerText = "For existing Verizon customers";
};



let modal = document.querySelector(".modals");
let openBtns = document.querySelectorAll("[data-open]");
let closeBtns = document.querySelectorAll("[data-close]");
let modal_bg = document.querySelector(".modal_bg");

openBtns.forEach(btn => {

  btn.onclick = () => {
    modal.style.display = "block";
    modal_bg.style.display = "block";
  
    setTimeout(() => {
      modal.style.opacity = "1";
      modal_bg.style.opacity = "1";
    }, 100);
  };
  
})

closeBtns.forEach(btn => {

  btn.onclick = () => {
    modal.style.opacity = "0";
    modal_bg.style.opacity = "0";
  
    setTimeout(() => {
      modal.style.display = "none";
      modal_bg.style.display = "none";
    }, 500);
  };
  
})