<template>
  <div class="doctor-detail">
    <h4>Doctor Detail</h4>
    <hr>
    <div class="container">
        <div class="time">
            <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50">
            <h5>Timing</h5>
            <h3>Availability</h3>
            <hr>
            <p>Weekday</p>
            <hr>
            <p>Weekend</p>
        </div>
        <div class="info" v-for="post in getPosts" :key="post.id">
            <h2 class="text-capitalize h5 mb-0">{{post.name}}</h2>
            <p class="small text-secondary m-0 mt-1">{{post.department}}</p>
            <p>Nationality</p>
        </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    name: 'DoctorDetail',
    components: {
    },
    computed: {
        ...mapGetters([
            "getPosts"
        ]), // mapGetters() will return ["getPosts"] => "getPosts"
    }
}
</script>

<style scoped>
h4, h5, h3, p {
    text-align: left;
}

hr {
    margin: 0px;
    margin-bottom: 5px;
    margin-right: 5px;
}

.container {
    width: 1024px;
    border: 1px solid;
    display: flex;
    height: 200px;
}

.time {
    border-right: 1px solid;
    width: 30%;
}
</style>