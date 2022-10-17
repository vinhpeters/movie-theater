<template>
  <div class="container-fluid  px-5 ">
    <div
      class="row min-h-100 justify-content-center align-items-center g-o"
    >
      <template v-for="image in group.images">
        <div class="col-3 mx-0 g-0">
          <img
            :src="`./img/${image.image}`"
            class="img-fluid poster poster-group"
            :alt="`${image.title}`"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    group: Object,
  },
};
</script>
