<template>
  <div class="container-fluid bg-white min-vh-100 p-2" id="comingSoon">
    <div class="text-center">
      <span class="section-header-black">Coming Soon</span>
    </div>
    <div
      id="comingSoonIndicators"
      class="carousel slide mt-3"
      data-bs-ride="true"
    >
      <div class="carousel-indicators indicators-black d-none text-center d-lg-inline pb-0 mb-0">
        <template v-for="movie in COMINGSOON" :key="movie.id">
          <button
            type="button"
            data-bs-target="#comingSoonIndicators"
            :data-bs-slide-to="movie.id"
            :class="getClass(movie.id)"
            :aria-current="movie.id === 0 ? 'true' : 'false'"
            :aria-label="'Slide' + movie.id"
          ></button>
        </template>
      </div>

      <div class="carousel-inner text-center">
        <template v-for="(movie, index) in COMINGSOON" >
          <div v-if="index+2<COMINGSOON.length && index+3 > COMINGSOON.length"
            :class="
              movie.id === 0 ? 'carousel-item active' : 'carousel-item'
            "
          >
            <PosterGroup  :movies="[...COMINGSOON.slice(index,index+2),COMINGSOON[0]]" />
          </div>

          <div v-if="index+2 >COMINGSOON.length && index+3 > COMINGSOON.length"
            :class="
              movie.id === 0 ? 'carousel-item active' : 'carousel-item'
            "
          >
            <PosterGroup  :movies="[COMINGSOON[index],...COMINGSOON.slice(0,2)]" />
          </div>

          <div v-if="index+2 <=COMINGSOON.length && index+3 <= COMINGSOON.length"
            :class="
              movie.id === 0 ? 'carousel-item active' : 'carousel-item'
            "
          >
            <PosterGroup  :movies="COMINGSOON.slice(index,index+3)" />
          </div>

        </template>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#comingSoonIndicators"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon-black d-none d-lg-block"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#comingSoonIndicators"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon-black d-none d-lg-block"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { COMINGSOON } from "../data/comingsoon.js";
import PosterGroup from "./PosterGroup.vue";
import MovieCard from "./MovieCard.vue";

export default {
  components: {
    PosterGroup,
    MovieCard
},
  inject: ["mq"],
  data() {
    return {
      COMINGSOON: COMINGSOON
    };
  },
  methods: {
    getClass(index) {
      const cls = index === 0 ? "active" : "";
      console.log(cls);
      return cls;
    }
  },
};
</script>
