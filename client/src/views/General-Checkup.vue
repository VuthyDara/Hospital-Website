<template>
  <Header></Header>
  <GeneralCheckup></GeneralCheckup>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import GeneralCheckup from '../components/General-Checkup.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'General-Checkup',
  components: {
    Header,
    GeneralCheckup,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
