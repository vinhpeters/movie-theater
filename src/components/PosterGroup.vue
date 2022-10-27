<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center g-o">

      <div v-if="movies[0]" class="col-lg-3 col-md-4  col-sm-8 mx-2 g-0 ">
        <img
          :src="`./img/${movies[0].image}`"
          class="img-fluid poster poster-group"
          :alt="`${movies[0].title}`"
        />
      </div>
      <div v-if="movies[1]"  class="col-lg-3 col-md-4  col-sm-8 mx-2 g-0 d-none d-md-block">
        <img
          :src="`./img/${movies[1].image}`"
          class="img-fluid poster poster-group"
          :alt="`${movies[1].title}`"
        />
      </div>

      <div v-if="movies[2]"  class="col-lg-3 col-md-5  col-sm-8 mx-2 g-0 d-none d-lg-block">
        <img
          :src="`./img/${movies[2].image}`"
          class="img-fluid poster poster-group"
          :alt="`${movies[2].title}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: Array,
  },
};
</script>
