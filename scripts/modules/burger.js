const burgerMenu = () => {
  const burger = document.querySelector(".header-burger");
  const menu = document.querySelector(".header-navigation");
  const menuLinks = menu.querySelectorAll(".navigation-item");
  const body = document.querySelector(".body");

  burger.addEventListener("click", () => {
    menu.classList.toggle("_active");
    burger.classList.toggle("_active");
    body.classList.toggle("lock");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("_active");
      burger.classList.remove("_active");
      body.classList.remove("lock");
    });
  });

  document.addEventListener("click", (e) => {
    if (
      !(
        e.target.closest(".header-navigation") ||
        e.target.closest(".header-burger")
      )
    ) {
      menu.classList.remove("_active");
      burger.classList.remove("_active");
      body.classList.remove("lock");
    }
  });
};

burgerMenu();
