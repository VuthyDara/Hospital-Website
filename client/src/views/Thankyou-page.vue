<template>
  <Header></Header>
  <Thankyou class="thankyou"></Thankyou>
  <LatestNews></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import Thankyou from '../components/Thankyou.vue'

export default {
  name: 'thankyou',
  components: {
    Header,
    Thankyou,
    LatestNews,
    Footer
  }
}
</script>

<style scoped>

.thankyou {
  margin-bottom: 50px;
}
</style>