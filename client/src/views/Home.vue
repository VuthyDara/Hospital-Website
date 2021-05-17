<template>
  <Header></Header>
  <Feature></Feature>
  <Field></Field>
  <Search></Search>
  <Emergency></Emergency>
  <LatestTips></LatestTips>
  <LatestNews></LatestNews>
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Feature from '../components/Feature.vue'
import Field from '../components/Field.vue'
import Search from '../components/Search.vue'
import Emergency from '../components/Emergency.vue'
import LatestTips from '../components/LatestTips.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Feature,
    Field,
    Search,
    Emergency,
    LatestTips,
    LatestNews,
    Footer
  }
}
</script>

<style>

</style>
