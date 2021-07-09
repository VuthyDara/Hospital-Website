<template>
  <div class="stomach">
    <h4>GI Center</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img class="img1" src="../assets/gi.jpg">
        </div>
        <div>
            <p>This area of medicine pertains to problems of the digestive system and liver. Our GI Specialists perform a comprehensive range of diagnostic and treatment options 
                including both colonoscopic and gastroscopic examinations.</p>
            <p>The human gastrointestinal tract is composed of the oesophagus, stomach, small intestine, colon, rectum, liver, gallbladder, bile ducts, and pancreas. All of 
                these are important internal organs involved in the processing of what we eat in order to gain nutrients and to provide our body with energy. These processes 
                extend from digestion up until food is released from our body as waste. If at any time these organs show signs of disorder, it is an indication of the possible 
                progression of infection and illness.</p>
            <p>Do not wait for symptoms to occur or worsen before it is too late.</p> 
        </div>
    </div>
    <h4>GI Center Team</h4>
    <hr>
    <div class="container" v-for="post in getPosts" :key="post.name">
      <ul>
        <li v-if="post.department === 'Stomach'">
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
  name: 'Stomach',
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
.stomach {
    width: 90%;
    margin: auto;
}

.content {
    display: flex;
}

.left {
    width: 300%;
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
