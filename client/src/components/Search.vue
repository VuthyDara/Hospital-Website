<template>
  <div class="search">
    <div class="left">
      <div class="row">
        <router-link to="/doctor">
          <div class="box">
            <img src="../assets/find.png" width="48" height="48">
            <label>Find a <br> Doctor</label>      
          </div>
        </router-link> 
        <router-link to="/message">
          <div class="box">
            <img src="../assets/appointment.jpg" width="48" height="48">
            <label>Make an appointment</label>           
          </div>
        </router-link>
      </div>  
      <div>
        <form action="#">
          <div>
            <input type="text" name="search" placeholder="Search for doctor">
          </div>
        </form>
      </div>
    </div>
    <div class="right">
      <img class="img" src="../assets/search.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
.search {
  display: flex;
  height: 300px;
  width: 80%;
  margin: auto;
}

.left {
  display: block;
  width: 30%;
  margin: auto;
}

.box {
  width: 80px;
  height: 100px;
  margin-right: 1em;
  display: block;
}

a {
  text-decoration: none;
  color: black;
}

label {
  font-size: 12px;
  margin: auto;
}

.row {
  display: flex;
  justify-content: space-between;
}

input {
  width: 80%;
  margin-left: -1.2em;
  border-radius: 5px;
}

.right {
  padding: 10px;
}

.img {
  width: 70%;
  
}
</style>
