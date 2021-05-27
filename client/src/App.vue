<template>
  <div id="nav">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      localPosts: []
    }
  },
  async mounted() {
    // Get data from server
    const response = await axios.get('http://localhost:4000/posts');
    // Go with this if you think this data is not shared with other component: Store data from server in local
    this.localPosts = response.data
    // Or go with this if you think this data will be reused again in other component: Store in vuex
    this.$store.dispatch("updatePosts", response.data)
  }
}
</script>

<style>
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';
	  @import 'https://use.fontawesome.com/releases/v5.6.1/css/all.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1024px;
  margin: auto;
}
</style>
