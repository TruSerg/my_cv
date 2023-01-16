const burgerMenu = () => {
  const burger = document.querySelector(".header-burger");
  const menu = document.querySelector(".header-navigation");
  const menuLinks = menu.querySelectorAll(".navigation-item");

  burger.addEventListener("click", () => {
    menu.classList.toggle("_active");
    burger.classList.toggle("_active");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("_active");
      burger.classList.remove("_active");
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
    }
  });
};

burgerMenu();
