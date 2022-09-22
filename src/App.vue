<template>
  <v-app >
    <navigation-vue/>
    <v-main >
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavigationVue from './components/Navigation.vue';
export default {
  name: 'App',

  data: () => ({
    
  }),

  components:{
    NavigationVue,
  }
};
</script>
