<template>
  <div id="home">
    <Header />
    <Gallery />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";

export default {
  name: "Home",
  components: {
    Header,
    Gallery,
  },
};
</script>

<style>
</style>