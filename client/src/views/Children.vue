<template>
  <Header></Header>
  <Children></Children>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Children from '../components/Children.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Children',
  components: {
    Header,
    Children,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
