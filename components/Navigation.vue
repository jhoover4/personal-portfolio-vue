<script setup>
const hamburgerOpen = ref(false);

const onHamburgerClick = () => {
  hamburgerOpen.value = !hamburgerOpen.value;
}
</script>

<template>
  <nav id="navigation" class="mt-3 pl-md-4">
    <button class="hamburger hamburger--spin" type="button" :class="{ 'is-active': hamburgerOpen }"
            @click="onHamburgerClick">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <Transition>
      <ul class="menulist underline-expand" v-if="hamburgerOpen">
        <NuxtLink to="/" class="menuitems">Home</NuxtLink>
        <NuxtLink to="/portfolio" class="menuitems">Portfolio</NuxtLink>
        <NuxtLink to="/blog" class="menuitems">Blog</NuxtLink>
      </ul>
    </Transition>
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

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: #fff;
    transition: width .2s;
  }

  &:hover::after {
    width: 100%;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.nav-open.menuitems {
  margin-top: 50px;
}

.underline-expand a {
  position: relative;
  padding-bottom: 0;

  &:hover {
    text-decoration: none;
    color: #222;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 5px;
    left: 0;
    background-color: #8b9480;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
</style>