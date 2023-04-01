<script setup>
const emit = defineEmits(["navOpen", "navClose"]);

const siteLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];

const hamburgerOpen = ref(false);
const navHeight = ref(50);
const linkMarginTop = ref(100);
const linkOpacity = ref(0);

const onHamburgerClick = () => {
  hamburgerOpen.value = !hamburgerOpen.value;

  if (hamburgerOpen.value) {
    emit("navOpen");
    navHeight.value = 300;
    linkMarginTop.value = 0;
    linkOpacity.value = 1;
  } else {
    emit("navClose");
    navHeight.value = 50;
    linkMarginTop.value = 100;
    linkOpacity.value = 0;
  }
};
</script>

<template>
  <nav
    id="navigation"
    class="mt-3 pl-md-4"
    :style="{ height: navHeight + 'px' }"
  >
    <button
      class="hamburger hamburger--spin"
      type="button"
      :class="{ 'is-active': hamburgerOpen }"
      @click="onHamburgerClick"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <ul class="menulist underline-expand">
      <li v-for="(link, index) in siteLinks" :key="index">
        <NuxtLink
          :to="link.url"
          class="menuitems"
          :style="{ marginTop: linkMarginTop + 'px', opacity: linkOpacity }"
          >{{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  position: relative;
  z-index: 2;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  padding-top: 0;

  ul {
    margin-top: 30px;
    text-align: left;
    list-style: none;
  }

  a:hover {
    color: black;
  }

  button:focus {
    outline: none;
  }
}

.menulist {
  width: 200px;
}

.menuitems {
  padding-top: 12px;
  margin-bottom: 12px;
  text-decoration: none;
  list-style: none;
  font-size: 2rem;
  display: inline-block;
  text-align: left;
  color: black;
  transition: all 0.5s ease-in-out;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: #fff;
    transition: width 0.2s;
  }

  &:hover::after {
    width: 100%;
  }
}
</style>
