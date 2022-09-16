<template>
    <Jumbotron/>
    <NavBar/>
    <Entry/>
</template>

<script>
    import Jumbotron from './Jumbotron.vue';
    import NavBar from './NavBar.vue';
    import Entry from './Entry.vue';

    export default {
        name: 'Home',
      components: {
        Jumbotron,
        NavBar,
        Entry
      }
    }
</script>