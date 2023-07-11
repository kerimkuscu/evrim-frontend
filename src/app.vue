<template>
  <navbar />
  <div class="m-3">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';

export default {
  name: 'RootComponent',

  components: {
    Navbar
  },
};
</script>
