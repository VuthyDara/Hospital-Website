<template>
  <div class="search">
    <div class="left">
      <div class="row">
        <div class="box">
          <a href="#">
            <img src="../assets/icon.png" width="48" height="48">
            <label>Find a Doctor</label>
          </a>             
        </div>
        <div class="box">
          <a href="#">
            <img src="../assets/icon.png" width="48" height="48">
            <label>Make an appointment</label>
          </a>             
        </div>
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
  height: 101px;
  display: block;
}

a {
  color: black;
}

label {
  font-size: 12px;
  margin: auto;
}

.row {
  display: flex;
}

input {
  width: 80%;
  border-radius: 5px;
}

.right {
  padding: 10px;
}

.img {
  width: 100%;
  height: 100%;
}
</style>
