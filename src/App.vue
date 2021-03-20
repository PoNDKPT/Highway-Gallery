<template>
  <div id="app">
    <Navbar />
    <Header />
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
export default {
  components:{
    Navbar,
    Header,
    Gallery,
    Footer,
  }
}
</script>
