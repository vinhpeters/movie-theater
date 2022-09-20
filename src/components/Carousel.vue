<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <template v-for="movie in MOVIES" key="movie.id">

          <button
          type="button"
          data-bs-target="#carouselIndicators"
          :data-bs-slide-to="movie.id"
          :class= "movie.id === 0 ? 'active' :''"
          :aria-label="Slide + movie.id"
          ></button>
          
        </template>
        

      </div>
      <div class="carousel-inner">
        <template v-for="movie in MOVIES">
          <div class="carousel-item active">
            <MovieCard :movie="movie" />
          </div>
        </template>

      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import { MOVIES } from "../data/movies.js";
console.log(MOVIES)
console.log(MOVIES[0])
export default {
  components: {
    MovieCard,
  },
  data() {
return {

  MOVIES: MOVIES
}

  }
};
</script>
