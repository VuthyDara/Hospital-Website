<template>
  <div class="container">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="../assets/feature1.jpg" style="width:100%; height:300px">
        </div>

        <div class="item">
          <img src="../assets/feature2.jpg" style="width:100%; height:300px">
        </div>
      
        <div class="item">
          <img src="../assets/feature3.jpg" style="width:100%; height:300px">
        </div>
      </div>

      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Feature'
}
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";

.container {
  width: 100%;
}

.glyphicon-chevron-left {
  left: 50px;
}

.glyphicon-chevron-right {
  right: 50px;
}

.carousel-indicators {
  bottom: 0px;
}
</style>