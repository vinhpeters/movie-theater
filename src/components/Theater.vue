<template>
  <div class="trailerbg carousel-wrapper">
    <div class="container vh-100" id="trailerContainer">
      <div class="row h-100 mt-n5">
        <div class="col my-auto">
          <div id="carousel" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="ratio ratio-16x9">
                  <iframe
                    class="mx-auto"
                    src="https://www.youtube.com/embed/wxN1T1uxQ2g?rel=0"
                    title="YouTube video player"
                    allow="accelerometer;clipboard-write; encrypted-media; gyroscope;
                                            allowfullscreen"
                  >
                  </iframe>
                </div>
              </div>

              <div class="carousel-item">
                <div class="ratio ratio-16x9">
                  <iframe
                    class="embed-responsive-item mx-auto"
                    src="https://www.youtube.com/embed/Go8nTmfrQd8?rel=0"
                    title="YouTube video player"
                    allowfullscreen
                  >
                  </iframe>
                </div>
              </div>

              <div class="carousel-item">
                <div class="ratio ratio-16x9">
                  <YoutubeVue3
                    ref="youtube"
                    videoid="_YGmTdo3vuY"
                    autoplay="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { YoutubeVue3 } from "youtube-vue3";
import NavBar from "./NavBar.vue";

export default {
  components: {
    YoutubeVue3,
    NavBar,
  },

  methods: {
    playCurrentVideo() {
      this.$refs.youtube.player.playVideo();
    },
    stopCurrentVideo() {
      this.$refs.youtube.player.stopVideo();
    },
    pauseCurrentVideo() {
      this.$refs.youtube.player.pauseVideo();
    },
  },
};
</script>
