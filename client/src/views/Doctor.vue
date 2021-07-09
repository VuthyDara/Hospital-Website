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
    <div class="container">
      <ul>
        <li v-for="post in getPosts" :key="post.name">
        <router-link :to="{name: 'doctor-detail', params: {name: post.name}}">
            <a href="#">
              <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50">
            </a>
            <a href="#">
              <h2 class="text-capitalize h5 mb-0">{{post.name}}</h2>
            </a> 
            <p class="small text-secondary m-0 mt-1">{{post.department}}</p>
        </router-link></li>
      </ul>
    </div>
  </div>
  <LatestNews></LatestNews> 
  <Footer></Footer>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Header from '../components/Header.vue'
import LatestNews from '../components/LatestNews.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Doctor',
  components: {
    Header,
    LatestNews,
    Footer
  },
  computed: {
        ...mapGetters([
            "getPosts"
        ]), // mapGetters() will return ["getPosts"] => "getPosts"
    }
}
</script>

<style scoped>
.upper-row {
    display: flex;
    justify-content: space-between;
}

.container {
  width: 1024px;
}

.container ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.container ul li {
  width: 300px;
  height: 100px;
  float: left;
  margin: 15px;
}
</style>
