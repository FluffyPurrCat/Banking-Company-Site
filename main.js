"use strict";

{
  const open = document.getElementById("open");
  const overlay = document.querySelector(".overlay");
  const close = document.getElementById("close");

  open.addEventListener("click", () => {
    overlay.classList.add("show");
    open.classList.add("hide");
  });

  close.addEventListener("click", () => {
    overlay.classList.remove("show");
    open.classList.remove("hide");
  });

  function switchTab(menuItems, contents, clickedItem) {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    clickedItem.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    document.getElementById(clickedItem.dataset.id).classList.add("active");
  }

  const menuItems = document.querySelectorAll(
    ".products .header-wrapper .btns a",
  );
  const products = document.querySelectorAll(".product");

  menuItems.forEach((clickedItem) => {
    clickedItem.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab(menuItems, products, clickedItem);
    });
  });

  const menuItems2 = document.querySelectorAll(
    ".testimonials .header-wrapper .btns a",
  );
  const contents = document.querySelectorAll(".testimonials .swiper-container");

  menuItems2.forEach((clickedItem) => {
    clickedItem.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab(menuItems2, contents, clickedItem);

      if (
        clickedItem.dataset.id === "testimonials-buissiness" &&
        !swiper2.initialized
      ) {
        requestAnimationFrame(() => swiper2.init());
      }
    });
  });

  const menuItems3 = document.querySelectorAll(
    ".features .features-wrapper .btns li",
  );
  const features = document.querySelectorAll(".features .features-wrapper dl");

  menuItems3.forEach((clickedItem) => {
    clickedItem.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab(menuItems3, features, clickedItem);
    });
  });

  const swiper1 = new Swiper(".swiper1", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
    breakpoints: {
      1440: {
        spaceBetween: 60,
      },
      1920: {
        spaceBetween: 80,
      },
    },
  });

  const swiper2 = new Swiper(".swiper2", {
    init: false,
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".next-btn2",
      prevEl: ".prev-btn2",
    },
    breakpoints: {
      1440: {
        spaceBetween: 60,
      },
      1920: {
        spaceBetween: 80,
      },
    },
  });
}
