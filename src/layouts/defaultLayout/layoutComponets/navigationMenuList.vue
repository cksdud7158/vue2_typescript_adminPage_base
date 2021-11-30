<template>
  <v-list expand nav flat>
    <template v-for="(item, index) in items">
      <navigation-list-group
        :item="item"
        :key="`group-${index}`"
        v-if="item.items"
      />
      <list-item :item="item" :key="`item-${index}`" v-else />
    </template>
  </v-list>
</template>
<script lang="ts">
import Vue from "vue";
import ListItem from "@/layouts/defaultLayout/layoutComponets/navigationListItem.vue";
import { items } from "@/constants/routeData";
import NavigationListGroup from "@/layouts/defaultLayout/layoutComponets/navigationListGroup.vue";

export default Vue.extend({
  name: "NavigationMenuList",
  components: { NavigationListGroup, ListItem },
  data() {
    return {
      items: items,
    };
  },
});
</script>
<style scoped></style>
