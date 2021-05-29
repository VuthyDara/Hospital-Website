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
        <section v-for="post in getPosts" :key="post.id" class="card mt-4">
              <div class="box">
                <div class="row m-0">
                  <div class="">
                    <a class="text-decoration-none" href="#">
                      <img class="" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50" alt="...">
                    </a>
                  </div>
                  <div class="flex-grow-1 pl-2">
                    <a class="text-decoration-none" href="#">
                      <h2 class="text-capitalize h5 mb-0">{{post.name}}</h2>
                    </a> 
                      <p class="small text-secondary m-0 mt-1">{{post.department}}</p>
                    </div>
                </div>
              </div>
            </section>
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

.list {
  display: flex;
  justify-content: space-between;
}

.box {
  width: 33%;
}
</style>
