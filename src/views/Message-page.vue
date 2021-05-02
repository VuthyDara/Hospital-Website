<template>
  <Header></Header>
  <Emergency></Emergency>
  <Message></Message>
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