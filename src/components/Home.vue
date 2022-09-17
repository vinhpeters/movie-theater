<template>
  <Header />
</template>

<script>
import Jumbotron from "./Jumbotron.vue";
import NavBar from "./NavBar.vue";
import Entry from "./Entry.vue";
import Header from "./Header.vue";

export default {
  name: "Home",
  components: {
    Jumbotron,
    NavBar,
    Entry,
    Header,
  },
};
</script>
