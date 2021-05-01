<template>
  <Header></Header>
  <Message></Message>
  <LatestNews></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import Message from '../components/Message.vue'

export default {
  name: 'Message-page',
  components: {
    Header,
    Message,
    LatestNews,
    Footer
  }
}
</script>

