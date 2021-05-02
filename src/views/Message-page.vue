<template>
  <Header></Header>
  <Emergency class="emergency"></Emergency>
  <Message class="message"></Message>
  <LatestNews></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import Message from '../components/Messages.vue'
import Emergency from '../components/Emergency.vue'

export default {
  name: 'Message-page',
  components: {
    Header,
    Emergency,
    Message,
    LatestNews,
    Footer
  }
}
</script>

<style scoped>
.emergency {
  height: 250px;
  display: block;
  margin-bottom: -20px;
}
</style>