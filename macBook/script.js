let photo = document.querySelector(".photo_box img");
let colorText = document.querySelector(".color");
let colorBtn = document.querySelectorAll(".switch");
let storageBtn = document.querySelectorAll(".storage");
let price = document.querySelector(".price");

const images = {
  white: "./img/silver.png",
  grey: "./img/gray.png",
};

colorBtn.forEach((btn) => {
  btn.onclick = () => {
    colorBtn.forEach((btn) => btn.classList.remove("active"));
    colorText.innerText = btn.innerText;

    const key = btn.getAttribute("data-col");
    photo.setAttribute("src", images[key]);

    btn.classList.add("active");
  };
});

let basicPrice = parseFloat(document.querySelector('.basic_price').innerText)

let storages = {
  default: 0,
  one: 200,
  two: 600,
  four: 1200,
};

storageBtn.forEach((btn) => {
  btn.onclick = () => {
    storageBtn.forEach((btn) => btn.classList.remove("activated"));

    let storage = storages[btn.getAttribute("data-storage")];
    let totalPrice = +storage + +basicPrice;

    let formattedTotalPrice = totalPrice.toLocaleString("en-US");

    price.innerText = `$${formattedTotalPrice}`;
    btn.classList.add("activated");
  };
});

