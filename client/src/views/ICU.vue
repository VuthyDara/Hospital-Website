<template>
  <Header></Header>
  <ICU></ICU>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import ICU from '../components/ICU.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'ICU',
  components: {
    Header,
    ICU,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
