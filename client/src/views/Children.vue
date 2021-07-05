<template>
  <Header></Header>
  <Childrens></Childrens>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Childrens from '../components/Children.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Children',
  components: {
    Header,
    Childrens,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
