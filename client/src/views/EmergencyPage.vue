<template>
  <Header></Header>
  <EmergencyPages></EmergencyPages>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import EmergencyPages from '../components/EmergencyPage.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'EmergencyPage',
  components: {
    Header,
    EmergencyPages,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
