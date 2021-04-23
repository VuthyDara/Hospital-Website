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
          <div class="box">
              <a href="#">
                <img src="../assets/hospital.jpg" width="200">
                <label>title</label>
              </a>
          </div>
          <div class="box">
              <a href="#">
                <img src="../assets/hospital.jpg" width="200">
                <label>title</label>
              </a>
          </div>
          <div class="box">
              <a href="#">
                <img src="../assets/hospital.jpg" width="200">
                <label>title</label>
              </a>
          </div>
          <div class="box">
              <a href="#">
                <img src="../assets/hospital.jpg" width="200">
                <label>title</label>
              </a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LatestTips'
}
</script>

<style>
.tips {
    width: 80%;
    margin: auto;
    display: block;
    height: 220px;
}

.title {
    display: flex;
    justify-content: space-between;
}

.row {
    display: flex;
    justify-content: space-between;
}
</style>
