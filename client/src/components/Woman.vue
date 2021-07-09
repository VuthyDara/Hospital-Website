<template>
  <div class="woman">
    <h4>Obstetric & Gynecology</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img class="img1" src="../assets/woman1.jpg">
        </div>
        <div>
            <p>With the state-of-art equipment and modern facility with very well trained doctors and nurses, Royal Phnom Penh Hospital Obstetrics & Gynecology center are ready 
                to diverse need of women for their different in life stages.</p>
            <p>We provide the all kind of treatment from the preventive care to the critical treatment including diagnostic, comprehensive health screenings, as well as 
                antenatal care and child delivery for expectant mothers.</p>
            <p>For the comfortable and safe for all women, we also provide the all kindly of specialty for women disease and provide a range of comprehensive healthcare 
                service in a comfortable private atmosphere.</p> 
        </div>
    </div>
    <h4>Obstetric & Gynecology Team</h4>
    <hr>
    <div class="container" v-for="post in getPosts" :key="post.name">
      <ul>
        <li v-if="post.department === 'Woman'">
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
  name: 'Woman',
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
.woman {
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
