<template>
  <div class="emergency">
    <div class="left">
      <h4>Emergency Call(24/7)</h4>
      <h5>+855 12 345 678</h5>
      <h5>+855 12 345 678</h5>
    </div>
    <div class="right">
      <h4>Need a doctor for checkup?</h4>
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
  background-color: #dc3545;
  height: 120px;
  margin: auto;
  color: white;
  display: flex;
  margin-bottom: 10px;
}

.left {
  width: 30%;
  padding: 10px;
}

.right {
  width: 70%;
  margin-right: 0px;
  padding: 10px;
}

a {
  color: white;
}
</style>
