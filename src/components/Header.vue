<template>
  <div class="container-fluid vh-100 m-0 p-1 bg-image">
    <div class="row px-5">
        <NavBar />
    </div>
    <div class="row p-5 h-100 ">
      <div class="m-5 pb-5 col-4  align-self-end">
        <div class="jumbotron">Capital Theater</div>
        <div class="jumbotron-subtitle">YOUR INDEPENDENT MOVIE THEATER</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "Header",
  components: {
    NavBar,
  },
};
</script>
