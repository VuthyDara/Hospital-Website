<template>
  <div class="news">
      <div class="title">
          Latest News
          <a href="#">
              News & Medias>>
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
  name: 'LatestNews'
}
</script>

<style>
.news {
    width: 80%;
    margin: auto;
    display: block;
    height: 220px;
    margin-bottom: 10px;
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
