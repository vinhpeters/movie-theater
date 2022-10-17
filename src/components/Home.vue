<template>
  <Header />
  <Carousel />
  <ComingSoon />
</template>

<script>
import NavBar from "./NavBar.vue";
import Header from "./Header.vue";
import Carousel from "./Carousel.vue";
import ComingSoon from "./ComingSoon.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Header,
    Carousel,
    ComingSoon,
  },
};
</script>
