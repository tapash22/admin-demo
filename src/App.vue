<template>
  <v-app>
    <navigation-vue />
    <v-main>
      <div class="deep-purple lighten-5">
        <router-view />
      </div>

    </v-main>
  </v-app>
</template>

<script>
import NavigationVue from './components/Navigation.vue';
export default {
  name: 'App',

  data: () => ({

  }),

  components: {
    NavigationVue,
  }
};
</script>
