<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>

<style>
.home-navbar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
