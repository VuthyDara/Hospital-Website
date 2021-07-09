<template>
  <div class="ICU">
    <h4>Intensive Care Unit (ICU)</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img class="img1" src="../assets/icu.jpg">
        </div>
        <div>
            <p>Our Department of Critical Care Medicine provides comprehensive medical management for individuals with critical life-threatening illnesses, major injuries and 
                post-operative care following intensive surgery.</p>
            <p>We provide 24 hour care with specialized treatments for patients in various life-threatening and critical conditions. Our Intensive Care Unit (ICU) team provides 
                fast and efficient diagnosis, treatment and monitoring of each patient’s condition.</p>
            <p>The Intensive Care Unit is fully-equipped with the latest medical devices, technology and equipment, including patient monitors, ventilators, dialysis machines etc.</p>
        </div>
    </div>
    <h4>Intensive Care Unit (ICU) Team</h4>
    <hr>
    <div class="container" v-for="post in getPosts" :key="post.name">
      <ul>
        <li v-if="post.department === 'ICU'">
            <a href="#">
              <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50">
            </a>
            <a href="#">
              <h2 class="text-capitalize h5 mb-0">{{post.name}}</h2>
            </a> 
            <p class="small text-secondary m-0 mt-1">{{post.department}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ICU',
  computed: {
        ...mapGetters([
            "getPosts"
        ]), // mapGetters() will return ["getPosts"] => "getPosts"
    }
}
</script>

<style scoped>
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
.ICU {
    width: 90%;
    margin: auto;
}

.content {
    display: flex;
}

.left {
    width: 100%;
}

.img1 {
    width: 100%;
    left: 0px;
}
h4 {
    text-align: left;
}

hr {
    margin: 0px;
    margin-bottom: 5px;
}

p {
    font-size: 12px;
}
</style>
