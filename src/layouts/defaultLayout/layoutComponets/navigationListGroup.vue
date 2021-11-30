<template>
  <v-list-group :prepend-icon="item.icon" eager v-bind="$attrs">
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </template>
    <template v-for="(child, i) in item.items">
      <navigation-list-group
        v-if="child.items"
        :key="`sub-group-${i}`"
        :item="child"
      />
      <navigation-list-item v-else :key="`child-${i}`" :item="child" />
    </template>
  </v-list-group>
</template>
<script lang="ts">
import Vue from "vue";
import NavigationListItem from "@/layouts/defaultLayout/layoutComponets/navigationListItem.vue";

export default Vue.extend({
  name: "NavigationListGroup",
  components: { NavigationListItem },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
<style scoped></style>
