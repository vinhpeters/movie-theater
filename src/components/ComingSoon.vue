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
      <div class="carousel-indicators indicators-black pb-0 mb-0">
        <template v-for="group in COMINGSOON" :key="group.groupid">
          <button
            type="button"
            data-bs-target="#comingSoonIndicators"
            :data-bs-slide-to="group.groupid"
            :class="getClass(group.groupid)"
            :aria-current="group.groupid === 0 ? 'true' : 'false'"
            :aria-label="'Slide' + group.groupid"
          ></button>
        </template>
      </div>

      <div class="carousel-inner text-center">
        <template v-for="group in COMINGSOON" :key="group.groupid">
          <div
            :class="
              group.groupid === 0 ? 'carousel-item active' : 'carousel-item'
            "
          >
            <PosterGroup :group="group" />
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

export default {
  components: {
    PosterGroup,
  },
  data() {
    return {
      COMINGSOON: COMINGSOON,
    };
  },
  methods: {
    getClass(index) {
      console.log(index);
      const cls = index === 0 ? "active" : "";
      console.log(cls);
      return cls;
    },
  },
};
</script>
