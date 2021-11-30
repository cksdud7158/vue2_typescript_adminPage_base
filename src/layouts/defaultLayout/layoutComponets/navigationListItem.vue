<template>
  <v-list-item link :to="item.to" active-class="primary white--text">
    <v-list-item-icon>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavigationListItem",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
<style scoped></style>
