<template>
  <Header />
  <Carousel />
</template>

<script>
import NavBar from "./NavBar.vue";
import Header from "./Header.vue";
import Carousel from "./Carousel.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Header,
    Carousel,
  },
};
</script>
