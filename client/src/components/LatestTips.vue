<template>
  <div class="tips">
    <div class="title">
      Latest Health Tips
      <router-link to="/Alltips">
        Health Tips>>
      </router-link>
    </div>
    <hr>
    <div class="row">
      <a href="http://localhost:8080/tip1">
        <div class="box">
          <img src="../assets/tip1.jpg" width="200">
          <label>Tip 1</label>
        </div>
      </a>
      <a href="http://localhost:8080/tip2">
        <div class="box">
          <img src="../assets/tip2.jpg" width="200">
          <label>Tip 2</label>
        </div>
      </a>
      <a href="http://localhost:8080/tip3">
        <div class="box">
          <img src="../assets/tip3.jpg" width="200">
          <label>Tip 3</label>
        </div>
      </a>
      <a href="http://localhost:8080/tip4">
        <div class="box">
          <img src="../assets/tip4.png" width="200">
          <label>Tip 4</label>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LatestTips'
}
</script>

<style scoped>
.tips {
  /*margin: auto;*/
  display: block;
  height: 220px;
  margin-top: 3em;
}

.title {
  display: flex;
  justify-content: space-between;
}

hr {
  margin-top: 0px;
}

.row {
  display: flex;
  justify-content: space-between;
}

.box {
  width: 20%;
  display: block;
}

label {
  font-size: 12px;
  margin: auto;
}
</style>
