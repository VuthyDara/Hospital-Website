<template>
  <Header></Header>
  <Emergency class="emergency"></Emergency>
  <Feedback class="feedback"></Feedback>
  <LatestNews></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'
import Feedback from '../components/Feedback.vue'
import Emergency from '../components/Emergency.vue'

export default {
  name: 'FeedbackPage',
  components: {
    Header,
    Emergency,
    Feedback,
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

.feedback {
  margin-bottom: 50px;
}
</style>