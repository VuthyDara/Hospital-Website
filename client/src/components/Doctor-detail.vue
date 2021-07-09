<template>
  <div class="doctor-detail">
    <h4>Doctor Detail</h4>
    <hr>
    <div class="container1">
        <div class="time">
            <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50">
            <h5>Timing</h5>
            <h3>Availability</h3>
            <hr>
            <p class="p">Weekday 8:00 AM - 5:00 PM</p>
            <hr>
            <p class="p">Weekend 8:00 AM - 12:00 PM</p>
        </div>
        <div class="info">
            <!-- <div v-if="post.name">
                <h3>{{post.name}}</h3>
            </div> -->
            <h3>Mr. A</h3>
            <h5>Brain</h5>
            <table style="width:500px">
                <tr>
                    <td colspan="2">Nationality</td>
                    <td>CAMBODIAN</td>
                </tr>
                <tr>
                    <td colspan="2">Language</td>
                    <td>Khmer/English</td>
                </tr>
                <tr>
                    <td colspan="2">Speciality</td>
                    <td>Brain</td>
                </tr>
                <tr>
                    <td colspan="2">Education</td>
                    <td>UHS</td>
                </tr>
                <tr>
                    <td colspan="2">Experience</td>
                    <td>Opthalmologist at Hospital</td>
                </tr>
            </table>
        </div>
    </div>
    <h4>Neurology Team</h4>
    <hr>
    <div class="container" v-for="post in getPosts" :key="post.name">
      <ul>
          <div v-if="post.name != 'Mr. A'">
            <li v-if="post.department === 'Brain'">
                <a href="#">
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50">
                </a>
                <a href="#">
                <h2 class="text-capitalize h5 mb-0">{{post.name}}</h2>
                </a> 
                <p class="small text-secondary m-0 mt-1">{{post.department}}</p>
            </li>
          </div>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    name: 'DoctorDetail',
    props: ['name'],
    data() {
      return {
        form: {
            name: null
        }
      }
    },
    mounted() {
        axios.get('https://localhost:4000/posts/' + this.$route.params.name)
            .then((result) => {
                this.form.name = result.data.name;
                this.form = result.data;
                console.log(result.data.name);
            })
    },
    computed: {
        ...mapGetters([
            "getPosts"
        ]), // mapGetters() will return ["getPosts"] => "getPosts"
    }
  }

</script>

<style scoped>
h4, h5, h3, .p {
    text-align: left;
    margin-top: 0px;
}

hr {
    margin: 0px;
    margin-bottom: 5px;
    margin-right: 5px;
}

.container1 {
    width: 1024px;
    border: 1px solid;
    display: flex;
    height: 200px;
}

.time {
    border-right: 1px solid;
    width: 30%;
    padding-left: 5px;
}

.info {
    padding: 10px;
}

td {
    text-align: left;
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