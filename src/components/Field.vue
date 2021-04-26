<template>
  <div class="field">
    <a href="#">
      <div class="box">
        <img src="../assets/icon.png">
        <label>General Check Up</label>
      </div>
    </a>
    <a href="#">
      <div class="box">
        <img src="../assets/icon.png">
        <label>General Check Up</label>
      </div>
    </a>
    <a href="#">
      <div class="box">
        <img src="../assets/icon.png">
        <label>General Check Up</label>
      </div>
    </a>
    <a href="#">
      <div class="box">
        <img src="../assets/icon.png">
        <label>General Check Up</label>
      </div>
    </a>
    <a href="#">
      <div class="box">
        <img src="../assets/icon.png">
        <label>General Check Up</label>
      </div>
    </a>
    <a href="#">
      <div class="box">
        <img src="../assets/icon.png">
        <label>General Check Up</label>
      </div>
    </a>
    <a href="#">
      <div class="box">
        <img src="../assets/icon.png">
        <label>General Check Up</label>
      </div>
    </a>
    <a href="#">
      <div class="box">
        <img src="../assets/icon.png">
        <label>General Check Up</label>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'Field'
}
</script>

<style scoped>
.field {
  padding: 0px 15px;
  /*margin: auto;*/
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2em;
}

a {
  color: black;
}

.box {
  width: 80px;
  height: 101px;
  display: block;
}

img {
  width: 48px;
  height: 48px;
  margin: auto;
}

label {
  font-size: 12px;
  margin: auto;
}
</style>