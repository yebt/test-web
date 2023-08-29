import "./style.css";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("sociallinks", () => ({
  socials: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/yahir-eduardo-bravo-tafur",
    },
    {
      name: "GitHub",
      url: "https://github.com/yebt",
    },
    {
      name: "GitLab",
      url: "https://gitlab.com/yebt",
    },
  ],
  today: new Date(),
}));

Alpine.start();
