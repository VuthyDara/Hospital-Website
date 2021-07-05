<template>
  <Header></Header>
  <Brains></Brains>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Brains from '../components/Brain.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Brain',
  components: {
    Header,
    Brains,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
