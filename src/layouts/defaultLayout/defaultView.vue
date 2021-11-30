<template>
  <v-main app>
    <spinner v-if="loading" />
    <router-view />
  </v-main>
</template>
<script lang="ts">
import Vue from "vue";
import Spinner from "@/components/Spinner.vue";

export default Vue.extend({
  name: "defaultView",
  components: { Spinner },
  data() {
    return {
      loading: false,
    };
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.loading = false;
  //   }, 1000);
  // },
});
</script>
<style scoped></style>
