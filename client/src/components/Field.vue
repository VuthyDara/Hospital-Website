<template>
  <div class="field">
    <router-link to="/generalcheckup">
      <div class="box">
        <img src="../assets/general-checkup.png">
        <label>General Check Up</label>
      </div>
    </router-link>
    <router-link to="/heart">
      <div class="box">
        <img src="../assets/heart.jpg">
        <label>Heart</label>
      </div>
    </router-link>
    <router-link to="/children">
      <div class="box">
        <img src="../assets/children.png">
        <label>Children</label>
      </div>
    </router-link>
    <router-link to="/woman">
      <div class="box">
        <img src="../assets/woman.png">
        <label>Woman</label>
      </div>
    </router-link>
    <router-link to="/emergencypage">
      <div class="box">
        <img src="../assets/emergency.png">
        <label>Emergency</label>
      </div>
    </router-link>
    <router-link to="/brain">
      <div class="box">
        <img src="../assets/brain.jpg">
        <label>Brain</label>
      </div>
    </router-link>
    <router-link to="/stomach">
      <div class="box">
        <img src="../assets/stomach.jpg">
        <label>Stomach</label>
      </div>
    </router-link>
    <router-link to="/ICU">
      <div class="box">
        <img src="../assets/ICU.png">
        <label>ICU</label>
      </div>
    </router-link>
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
  display: grid;
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