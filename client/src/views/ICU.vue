<template>
  <Header></Header>
  <ICUs></ICUs>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import ICUs from '../components/ICU.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'ICU',
  components: {
    Header,
    ICUs,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
