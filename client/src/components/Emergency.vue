<template>
  <div class="emergency">
    <div class="left">
      <h3>Emergency Call(24/7)</h3>
      <h5>+855 12 345 678</h5>
      <h5>+855 12 345 678</h5>
    </div>
    <div class="right">
      <h3>Need a doctor for checkup?</h3>
      <a href="#">
        <span>Make an appointment</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Emergency'
}
</script>

<style scoped>
.emergency {
  margin-top: 3em;
  background-color: #bd1122;
  height: 140px;
  /*margin: auto;*/
  color: white;
  display: flex;
  margin-bottom: 10px;
}

.left {
  width: 30%;
  margin-left: 2em;
  font-size: 1.2em;
  padding: 10px;
}

.right {
  width: 70%;
}

a {
  color: white;
  font-size: 1.2em;
}
</style>
