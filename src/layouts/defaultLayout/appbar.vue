<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="changeDrawerState"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "appbar",
  methods: {
    changeDrawerState() {
      this.$emit("change");
    },
  },
});
</script>
<style scoped></style>
