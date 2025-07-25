<script setup>
const languageChoices = new Map([
  ["python", "fa-python"],
  ["javascript", "fa-js"],
  ["react", "fa-react"],
  ["vue", "fa-vue"],
  ["node", "fa-node"],
  ["php", "fa-php"],
  ["css", "fa-css3-alt"],
  ["sass", "fa-sass"],
  ["api", "fa-connectdevelop"],
]);

const portfolios = ref([
  {
    title: "Mineral Catalog",
    url: "https://mineral-catalog.jordanhoover.me",
    img: {
      alt: "Mackys Minerals Catalog",
      url: "/img/mackys-minerals.png",
    },
    languagesUsed: ["python", "api"],
  },
  // {
  //   title: "Pug or Ugh API",
  //   url: "https://www.google.com",
  //   img: {
  //     alt: "We Will Not Be Tamed Site",
  //     url: "/img/wwnbt-site.jpg",
  //   },
  //   languagesUsed: ["python", "javascript", "react", "api"],
  // },
  {
    title: "Student Filtering App",
    url: "https://jhoover4.github.io/list-pagination-and-filtering",
    img: {
      alt: "Student Filtering App Image",
      url: "/img/filtering-app.png",
    },
    languagesUsed: ["javascript", "react"],
  },
  {
    title: "Morisson Design Site",
    url: "https://jhoover4.github.io/designer-portfolio-template",
    img: {
      alt: "Designer Portfolio Image",
      url: "/img/designer-portfolio.png",
    },
    languagesUsed: ["python", "javascript", "sass"],
  },
  {
    title: "Gear Up For Game Wardens Site",
    url: "https://www.gearupforgamewardens.org/",
    img: {
      alt: "Gear Up For Game Wardens Image",
      url: "/img/gear-up-for-game-wardens.png",
    },
    languagesUsed: ["php", "javascript", "css"],
  },
  {
    title: "We Will Not Be Tamed Site",
    url: "https://www.wewillnotbetamed.org",
    img: {
      alt: "We Will Not Be Tamed Image",
      url: "/img/wwnbt-site.jpg",
    },
    languagesUsed: ["php", "javascript", "css"],
  },
  {
    title: "Password Strength Meter",
    url: "https://elboletaire.github.io/password-strength-meter/",
    img: {
      alt: "Password Strength Meter Image",
      url: "/img/password-strength-plugin.png",
    },
    languagesUsed: ["javascript", "node", "css"],
  },
]);

const getIcon = (key) => {
  const icon = languageChoices.get(key);

  if (!icon) {
    console.error(icon, " icon not found in fontawesome!");
  }

  return icon;
};
</script>

<template>
  <div class="container mt-5 gallery-wrapper">
    <header>
      <h1 class="title">Portfolio</h1>
      <p>
        Just a few examples of my work, see my
        <a href="https://github.com/jhoover4">GitHub</a> for project source
        code.<br /><b>I'm currently working on rehosting my apps!</b> Please see
        the <a href="/blog/heroku">explanation here</a>.
      </p>
    </header>
    <div class="gallery-container">
      <div
        v-for="portfolioItem in portfolios"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-4 cell-container gallery-thumbnail-container"
      >
        <img
          :src="portfolioItem.img.url"
          :alt="portfolioItem.img.alt"
          class="gallery-thumbnail image"
        />
        <a
          class="overlay"
          :href="portfolioItem.url"
          :title="portfolioItem.img.alt"
          target="_blank"
        >
          <div class="portfolio-item-title px-md-5">
            <p>{{ portfolioItem.title }}</p>
            <div class="divider"></div>
            <font-awesome-icon
              style="margin-right: 0.5rem"
              v-for="(language, index) in portfolioItem.languagesUsed"
              :key="index"
              :icon="['fab', getIcon(language)]"
            ></font-awesome-icon>
          </div>
          <span></span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery-container {
  .cell-container {
    display: inline-block;
  }

  .gallery-thumbnail {
    box-shadow: 1px 1px 3px #333;
  }

  .portfolio-item-title {
    margin-top: 3%;
    color: #222;
    font-family: "Eczar", serif;
    font-size: 2rem;
  }

  .image {
    display: block;
    height: auto;
    width: 100%;
    border-radius: 1%;
  }

  .sub-title {
    font-family: "Eczar", serif;
    font-size: 1rem;
    line-height: 24px;
    margin-top: 10px;
    text-align: left;
  }

  .divider {
    background-color: #222;
    height: 2px;
    width: 50px;
  }

  a,
  a:visited,
  a:hover {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .overlay {
      background-color: #000;
      bottom: 0;
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0;
      transition: 0.5s ease;
      top: 0;
      width: 100%;

      &::before,
      &::after {
        content: "";
        width: 0;
        height: 4px;
        position: absolute;
        transition: all 0.2s linear;
        background: #222;
      }

      &::before {
        left: 50%;
        top: 0;
        transition-duration: 0.4s;
      }

      &::after {
        left: 50%;
        bottom: 0;
        transition-duration: 0.4s;
      }

      &:hover {
        opacity: 0.65;
        background-color: white;

        .image {
          filter: blur(4px);
        }

        & .portfolio-item-title {
          opacity: 1;
        }
      }

      &:hover::before,
      &:hover::after {
        width: 100%;
      }

      &:hover span::before,
      &:hover span::after {
        height: 100%;
      }

      &:hover::before,
      &:hover::after {
        left: 0;
      }

      &:hover span::before,
      &:hover span::after {
        top: 0;
      }
    }

    .overlay span {
      display: block;
      padding: 25px 80px;

      &::before,
      &::after {
        content: "";
        width: 4px;
        height: 0;
        position: absolute;
        transition: all 0.2s linear;
        background: #222;
      }

      &::before {
        left: 0;
        top: 50%;
        transition-duration: 0.4s;
      }

      &::after {
        right: 0;
        top: 50%;
        transition-duration: 0.4s;
      }
    }

    .portfolio-item-title {
      margin-top: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      width: 100%;
      opacity: 0;
      text-align: left;
    }

    .col-lg-1,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-md-1,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-sm-1,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-xs-1,
    .col-xs-10,
    .col-xs-11,
    .col-xs-12,
    .col-xs-2,
    .col-xs-3,
    .col-xs-4,
    .col-xs-5,
    .col-xs-6,
    .col-xs-7,
    .col-xs-8,
    .col-xs-9,
    .portfolio-container {
      padding-right: 0;
      padding-left: 0;
    }
  }
}

.gallery-container * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.gallery-wrapper {
  margin-top: 10px;
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;

  &:hover {
    box-shadow: 1px 1px 3px #fff;
  }
}

.gallery-thumbnail-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-right: 5%;
}

.gallery-pagination-container {
  border-top: 9px solid #dfdfdf;
  font-size: 20px;
  padding-top: 10px;
  list-style-type: none;
}

.gallery-pagination-item {
  display: inline-block;
}

@media (max-width: 1200px) {
  .gallery-thumbnail-container {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .gallery-thumbnail {
    width: 96%;
    height: auto;
  }
}
</style>
