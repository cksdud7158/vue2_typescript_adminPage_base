<template>
  <v-app>
    <appbar @change="drawer = !drawer" />
    <navigation-drawer v-model="drawer" />
    <default-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import appbar from "@/layouts/defaultLayout/appbar.vue";
import navigationDrawer from "@/layouts/defaultLayout/navigationDrawer.vue";
import defaultView from "@/layouts/defaultLayout/defaultView.vue";

export default Vue.extend({
  name: "App",
  components: {
    appbar,
    navigationDrawer,
    defaultView,
  },
  data: () => ({ drawer: false }),
});
</script>
