<template>
  <div class="container-fluid vh-100 d-flex flex-column p-0 bg-image">
    <div class="row mx-5 my-2  border border-white">
      <NavBar />
    </div>
    <div class="row m-5 flex-grow-1 border border-white">
      <div class=" col-md-4 align-self-end border border-white">
        <h1 class="jumbotron">Capital Theater</h1>
        <h2 class="jumbotron-subtitle">YOUR INDEPENDENT MOVIE THEATER</h2>
      </div>
    </div>
  </div>
  <div
    class="d-flex address-banner bg-white align-items-center justify-content-center"
  >
    <div class="text-center address">
      1550 NORTH HIGH STREET, COLUMBUS OHIO 43201
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
