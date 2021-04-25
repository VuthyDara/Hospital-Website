<template>
  <div class="header">
    <div class="title">
      Hospital
    </div>
    <ul>
      <div class="dropdown">
        <button class="dropbtn"><li>Center & Clinic</li></button>
        <div class="dropdown-content">
          <p>Center & Clinic</p>
          <hr>
          <a href="#" class="field">General Check up</a>
          <a href="#" class="field">Heart</a>
          <a href="#" class="field">GI Center</a>
          <a href="#" class="field">Children</a>
          <a href="#" class="field">Woman</a>
          <a href="#" class="field">Emergency</a>
          <a href="#" class="field">Brain</a>
          <a href="#" class="field">Neurology</a>
          <a href="#" class="field">ICU</a>
          <a href="#" class="func">Make an Appointment</a>
          <a href="#" class="func">Patient's Story</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn"><li>Health Tips</li></button>
        <div class="dropdown-content">
          <p>Health Tips</p>
          <hr>
          <a href="#" class="func">Health Tips</a>
          <a href="#" class="func">Disease & Treatment</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn"><li>Contact Us</li></button>
        <div class="dropdown-content">
          <p>Contact Us</p>
          <hr>
          <a href="#" class="func">Contact Us</a>
          <a href="#" class="func">Customer Feedback</a>
        </div>
      </div>
    </ul>
  </div>
  <hr>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 0px 10px;
  padding: 0px;
}

.field {
  color: grey;
}

.func {
  color: black;
}

.title {
  font-size: 40px;
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 30%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

hr {
  margin-bottom: 10px;
  margin-top: 0px;
}

li {
  float: left;
  display: block;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

.dropbtn {
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: white;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  left: 0;
  min-width: 360px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 6px;
  z-index: 1;
}

.dropdown-content a {
  margin-left: 0px;
  padding: 6px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1;}
.dropdown:hover .dropdown-content {display: block;}
.dropdown:hover .dropbtn {background-color: white;}
</style>
