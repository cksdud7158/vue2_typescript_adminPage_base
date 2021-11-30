<template>
  <v-navigation-drawer v-bind="$attrs" app>
    <navigation-header />
    <v-divider></v-divider>
    <navigation-menu-list />
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";
import NavigationHeader from "@/layouts/defaultLayout/layoutComponets/navigationHeader.vue";
import NavigationMenuList from "@/layouts/defaultLayout/layoutComponets/navigationMenuList.vue";

export default Vue.extend({
  name: "navigationDrawer",
  components: {
    NavigationMenuList,
    NavigationHeader,
  },
  data() {
    return {};
  },
});
</script>
<style scoped></style>
