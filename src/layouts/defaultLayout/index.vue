<template>
  <v-app>
    <appbar @change="drawer = !drawer" />
    <navigation-drawer v-model="drawer" />
    <default-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import appbar from "@/layouts/defaultLayout/layoutComponets/appbar.vue";
import navigationDrawer from "@/layouts/defaultLayout/layoutComponets/navigationDrawer.vue";
import defaultView from "@/layouts/defaultLayout/defaultView.vue";

export default Vue.extend({
  name: "defaultLayout",
  components: {
    appbar,
    navigationDrawer,
    defaultView,
  },
  data: () => ({ drawer: false }),
});
</script>
