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
import Header from './Header.vue'
import Feature from './Feature.vue'
import Field from './Field.vue'
import Search from './Search.vue'
import Emergency from './Emergency.vue'
import LatestTips from './LatestTips.vue'
import LatestNews from './LatestNews.vue'
import Footer from './Footer.vue'

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
