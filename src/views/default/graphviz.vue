<template>
  <v-container fluid>
    <v-row justify="center">
      <div id="graph" />
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import { graphviz } from "d3-graphviz";
import { graphvizData } from "@/constants/data";

export default Vue.extend({
  name: "graphviz",
  mounted() {
    this.render();
  },
  methods: {
    render() {
      graphviz("#graph").renderDot(graphvizData);
    },
  },
});
</script>
<style scoped></style>
