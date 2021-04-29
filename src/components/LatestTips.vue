<template>
  <div class="tips">
    <div class="title">
      Latest Health Tips
      <a href="#">
        Health Tips>>
      </a>
    </div>
    <hr>
    <div class="row">
      <a href="#">
        <div class="box">
          <img src="../assets/news.jpg" width="200">
          <label>title</label>
        </div>
      </a>
      <a href="#">
        <div class="box">
          <img src="../assets/news.jpg" width="200">
          <label>title</label>
        </div>
      </a>
      <a href="#">
        <div class="box">
          <img src="../assets/news.jpg" width="200">
          <label>title</label>
        </div>
      </a>
      <a href="#">
        <div class="box">
          <img src="../assets/news.jpg" width="200">
          <label>title</label>
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
