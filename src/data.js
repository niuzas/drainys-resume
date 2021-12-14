import linkedin from "./images/linkedin-logo.png";
import twitter from "./images/twitter-logo.png";
import github from "./images/github-logo.png";
import blog from "./images/dev-to-logo.png";

const data = {
  en: {
    links: {
      title: "Links",
      items: [
        {
          img: linkedin,
          text: "Linkedin/UserName",
          url: "https://linkedin.com/",
          alt: "linkedin logo",
        },
        {
          img: twitter,
          text: "@DRainys",
          url: "https://twitter.com/drainys",
          alt: "twitter logo",
        },
        {
          img: github,
          text: "mindaugas-jacionis",
          url: "https://github.com/darius-rainys",
          alt: "github logo",
        },
        { img: blog, text: "My Blog", url: "https://dev.to/", alt: "dev.to logo" },
      ],
    },
    about: {
      title: "About Me",
      body: "Programmer.",
    },
  },
  lt: {
    links: {
      title: "Nuorodos",
      items: [
        {
          img: linkedin,
          text: "Linkedin/UserName",
          url: "https://linkedin.com/",
          alt: "linkedin logotipas",
        },
        {
          img: twitter,
          text: "@DRainys",
          url: "https://twitter.com/drainys",
          alt: "twitter logotipas",
        },
        {
          img: github,
          text: "darius-rainys",
          url: "https://github.com/darius-rainys",
          alt: "github logotipas",
        },
        { img: blog, text: "Asmeninis Blogas", url: "https://dev.to/", alt: "dev.to logotipas" },
      ],
    },
    about: {
      title: "Apie Mane",
      body: "Programeris konkrečiai.",
    },
  },
};

export default data;
