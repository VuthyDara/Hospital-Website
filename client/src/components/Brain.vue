<template>
  <div class="brain">
    <h4>Neurology</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img class="img1" src="../assets/neurology01.jpg">
        </div>
        <div>
            <p>Certain symptoms such as severe headache, nausea, vomiting, sudden weakness of legs or arms, abnormal facial expression, and slurred speech are important 
                signs of stroke, which may be caused by vascular thrombosis or a hemorrhage in the brain. Patients need to come to the hospital immediately for an examination 
                using RPH’s computer tomography (CT scan) or magnetic resonance imaging (MRI) to detect the significance and impact of these symptoms. By providing immediate 
                treatment that is specific to issues found through diagnostic imaging, patients can be saved from physical impairments such as paralysis.</p>
            <p>Motorcycle accidents are also a major cause of skull fracture and brain hemorrhage in Cambodia. Victims of accidents also require immediate diagnostic imaging 
                and potentially an operation to reduce the risk of permanent brain damage or paralysis.</p>
        </div>
    </div>
    <h4>Neurology Team</h4>
    <hr>
    <div class="container" v-for="post in getPosts" :key="post.name">
      <ul>
        <li v-if="post.department === 'Brain'">
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
  name: 'Brain',
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
.brain {
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
