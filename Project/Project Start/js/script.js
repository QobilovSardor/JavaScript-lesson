document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Loader
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 100);
  }, 300);
  // Tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent"),
    tabheader = document.querySelector(".tabheader__items");

  function hiddenContent() {
    tabContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function showContent(i = 0) {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }
  hiddenContent();
  showContent();

  tabheader.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hiddenContent();
          showContent(i);
        }
      });
    }
  });

  //   Modal
  const modal = document.querySelector(".modal"),
    openModal = document.querySelectorAll("[data-modul='']"),
    closeModal = document.querySelector(".modal__close");

  setTimeout(function () {
    showMyModal();
  }, 5000);
  function showMyModal() {
    modal.classList.add("showModal");
    modal.classList.remove("hiddenModal");
    document.body.style.overflow = "hidden";
  }
  function hiddenMyModal() {
    modal.classList.remove("showModal");
    modal.classList.add("hiddenModal");
    console.log("Ishladi");
    document.body.style.overflow = "auto";
    clearInterval(modalTimer);
  }
  openModal.forEach((btn) => {
    btn.addEventListener("click", showMyModal);
  });
  closeModal.addEventListener("click", hiddenMyModal);
  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      hiddenMyModal();
    }
  });
  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      window.removeEventListener("scroll", showModalByScroll);
      showMyModal();
    }
  }
  window.addEventListener("scroll", showModalByScroll);
  showMyModal();
  hiddenMyModal();
});
