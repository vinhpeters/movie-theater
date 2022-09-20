<template>
  <div class="container-fluid bg-transparent m-4 p-4">
    <div class="row justify-content-center g-0">
      <div class="col-md-4 border border-white text-center align-self-center">
        <div class="m-4">
          <img
            :src="`./img/${movie.image}`"
            class="img-fluid poster"
            alt="..."
          />
        </div>
      </div>
      <div class="col-md-4 border border-white">
        <div class="card-body">
          <h5 class="card-title text-white">{{movie.title}}</h5>
          <div class="container mt-3">
            <div class="row p-0">
              <div class="p-0 border border-white d-flex-column">
                <div class="text-white">
                  <span class="card-header">DIRECTOR </span>
                  <span>{{movie.director}}</span> <span> | </span>
                  <span class="card-header">RUNTIME </span> <span>{{movie.runtime}}</span>
                </div>
                <div class="text-white">
                  <span class="card-header">RATING </span>
                  <span>{{movie.rating}}</span> <span> | </span>
                  <span class="card-header">RELEASE YEAR </span>
                  <span>{{movie.year}}</span>
                </div>
              </div>
              <div class="mt-3 p-0">
                <div class="card-header">DESCRIPTION</div>
                <p class="mt-3 p-0">
                  {{movie.description}}
                </p>
              </div>

              <div class="mt-3 p-0">
                <span class="card-title">SHOWTIMES</span>
              </div>
              <div class="row mt-3">
                <span class="card-header">SATURDAY, JUNE 15TH</span>
                <div class="d-flex mt-2 p-0">
                  <div
                    class="btn-showtime px-3 me-2 btn btn-light rounded-pill"
                  >
                    8:00 PM
                  </div>
                  <div
                    class="btn-showtime px-3 me-2 btn btn-light rounded-pill"
                  >
                    8:00 PM
                  </div>
                  <div
                    class="btn-showtime px-3 me-2 btn btn-light rounded-pill"
                  >
                    8:00 PM
                  </div>
                  <div
                    class="btn-showtime px-3 me-2 btn btn-light rounded-pill"
                  >
                    8:00 PM
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <span class="card-header">SUNDAY, JUNE 16TH</span>
                <div class="d-flex mt-2 p-0">
                  <div
                    class="btn-showtime px-3 me-2 btn btn-light rounded-pill"
                  >
                    8:00 PM
                  </div>
                  <div
                    class="btn-showtime px-3 me-2 btn btn-light rounded-pill"
                  >
                    8:00 PM
                  </div>
                  <div
                    class="btn-showtime px-3 me-2 btn btn-light rounded-pill"
                  >
                    8:00 PM
                  </div>
                  <div
                    class="btn-showtime px-3 me-2 btn btn-light rounded-pill"
                  >
                    8:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  },
};
</script>
