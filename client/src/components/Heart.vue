<template>
  <div class="heart">
    <h4>Cardiology</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img class="img1" src="../assets/cardiology.jpg">
        </div>
        <div>
            <p>Heart problems are quite common in Cambodia – especially heart attacks, which can be fatal and require proper treatment urgently.</p>
            <p>RPH has recently opened its Cardiology Center, which houses a team of cardiac specialists from Thailand.</p>
            <p>RPH’s Cardiac Catheterization Laboratory provides cardiac angiography that will visualize abnormalities in the heart. The Cardiac Care Unit also provides 
                percutaneous intervention that will relieve occluded coronary arteries.</p> 
        </div>
    </div>
    <h4>Cardiology Team</h4>
    <hr>
    <div class="container" v-for="post in getPosts" :key="post.name">
      <ul>
        <li v-if="post.department === 'Heart'">
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
  name: 'Heart',
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
.heart {
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
