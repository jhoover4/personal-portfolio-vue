<script scoped>
const hamburgerOpen = ref(false);

const onHamburgerClick = () => {
  hamburgerOpen.value = true;
};
// //fade-in
// $mainHomePageDiv.show().animate({opacity: 1, top: 0}, 1400);

function navToggle() {
  // const $nav = $("nav");
  // const $main = $("#main");
  // const $menu = $(".menuitems");
  // const $links = $(".portfolio-links");
  //
  // //to close
  // if ($nav.height() > 50) {
  //     $nav.height(50);
  //     $main.css("marginTop", "50px");
  //
  //     $menu.each(function (index) {
  //             $(this).css({
  //                 opacity: "0.0",
  //                 marginTop: "100px"
  //             });
  //         }
  //     );
  //     $links.css("marginTop", "40%");
  // } else {
  //     $nav.height(300);
  //     $main.css("marginTop", "300px");
  //     $menu.each(function (index) {
  //             $(this).css({
  //                 opacity: "1.0",
  //                 marginTop: "0px"
  //             });
  //         }
  //     );
  //     $links.css("marginTop", "25%");
  // }
}
</script>

<template>
  <nav id="navigation" class="mt-3 pl-md-4">
    <button class="hamburger hamburger--spin" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <ul class="menulist underline-expand">
      <NuxtLink to="/" class="menuitems">Home</NuxtLink>
      <NuxtLink to="/portfolio" class="menuitems">Portfolio</NuxtLink>
      <NuxtLink to="/blog" class="menuitems">Blog</NuxtLink>
    </ul>
  </nav>
</template>

<style scoped>
.nav-open.menuitems {
  margin-top: 50px;
}
</style>