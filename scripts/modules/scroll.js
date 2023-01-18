const scroll = () => {
  const links = document.querySelectorAll(".navigation-link");

  const allLinks = [...links];

  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const id = link.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      if (section) {
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    });
  });
};

scroll();
