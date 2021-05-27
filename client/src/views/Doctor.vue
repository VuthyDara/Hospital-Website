<template>
  <Header></Header>
  <div class="doctor">
      <div class="upper-row">
            <h4>Our Doctors</h4>
            <form action="#">
                <div>
                    <input type="text" name="search" placeholder="Filter by department">
                </div>
            </form>
            <form action="#">
                <div>
                    <input type="text" name="search" placeholder="Search for doctor">
                </div>
            </form>
      </div>
      <div class="list">
        
      </div>
  </div>
  <LatestNews></LatestNews> 
  <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Doctor',
  components: {
    Header,
    LatestNews,
    Footer
  }
}
</script>

<style scoped>
.upper-row {
    display: flex;
    justify-content: space-between;
}
</style>
