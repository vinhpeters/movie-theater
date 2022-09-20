<template>
  <div class="container-fluid vh-100 d-flex flex-column p-0 bg-image">
    <div class="row mx-5 my-2">
      <NavBar />
    </div>
    <div class="row m-5 flex-grow-1">
      <div class="col-md-4 align-self-end">
        <h1 class="jumbotron">Capital Theater</h1>
        <h2 class="jumbotron-subtitle">YOUR INDEPENDENT MOVIE THEATER</h2>
      </div>
    </div>
  </div>
  <div
    class="d-flex address-banner bg-white align-items-center justify-content-center"
  >
    <div class="text-center address">
      
       <a href="https://goo.gl/maps/B95Wkryv39tVNhJCA" target="_blank" rel="noopener noreferrer" class="address-link"> 1550 NORTH HIGH STREET, COLUMBUS OHIO 43201 </a>
      
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
