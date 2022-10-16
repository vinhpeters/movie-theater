<template>
  <nav class="navbar navbar-expand-lg bg-transparent navbar-dark sticky-top mt-0 p-0">
    <div class="container-fluid">
      <button
        class="navbar-toggler ml-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="lead nav-link" href="/"> HOME</a>
          </li>
          <li class="nav-item">
            <a class="lead nav-link" href="#"> VISIT</a>
          </li>
          <li class="nav-item">
            <a class="lead nav-link" href="#nowShowing">NOW SHOWING</a>
          </li>
          <li class="nav-item">
            <a class="lead nav-link" href="#">COMING SOON</a>
          </li>
        </ul>
        <div class="d-flex me-2">
          <button class="btn-header btn btn-outline-light nav-link p-2" type="submit">SHOWTIMES</button>
        </div>
      </div>
    </div>
  </nav>
</template>
