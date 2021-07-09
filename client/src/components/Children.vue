<template>
  <div class="children">
    <h4>Pediatric</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img class="img1" src="../assets/chidlren.jpg">
        </div>
        <div>
            <p>Illness in children can range from minor diseases such as fever and a common cold to severe problems including Hand, Foot and Mouth disease. Caring for the 
                smallest members of our community lies at the heart of the RPH.</p>
            <p>Prevention of communicable diseases can be done through vaccination following guidelines recommended by the World Health Organization (WHO).</p>
            <p>RPH has separate Sick Baby and Well Baby Clinics to prevent cross infection among sick and well babies.</p> 
        </div>
    </div>
    <h4>Pediatric Team</h4>
    <hr>
    <div class="container" v-for="post in getPosts" :key="post.name">
      <ul>
        <li v-if="post.department === 'Children'">
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
  name: 'Children',
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
.children {
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
