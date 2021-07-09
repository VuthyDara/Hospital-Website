<template>
  <div class="message">
    <h3>Make an Appointment</h3><hr>
    <div class="box">  
      <h4>You can use this form to book appointment with our doctor.<br/>
Before booking any appointment make sure you have checked the doctor's schedule.</h4>
      <div class="row">
        <div>
          <form action="#">
            <div class="custom-input">
              <img src="../assets/patient.png">
              <input type="text" name="patient_name" placeholder="Patient's Name">
            </div>
          </form>
        </div>
        <div>
            <form action="#">
              <div class="custom-input">
                <img src="../assets/phonenumber.png">
                <input type="text" name="phone_number" placeholder="Phone Number">
              </div>
            </form>
          </div>
        </div>    
        <div class="row">
          <div>
            <form action="#">
              <div class="custom-input">
                <img src="../assets/email.png">
                <input type="text" name="email" placeholder="Email Address">
              </div>
            </form>
          </div>
          <div>
            <form action="#">
              <div class="custom-input">
                <img src="../assets/date.png">
                <input type="date" name="date" placeholder="Choose Date">
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div>
            <form action="#">
              <div class="custom-input">
                <img src="../assets/department.png">
                <select name="department">
                  <option value="default" selected="selected">Choose a department</option>
                  <option value="department" v-for="post in getPosts" :key="post.id">
                    <h2 class="text-capitalize h5 mb-0">{{post.department}}</h2>
                  </option>
                </select>
              </div>
            </form>
          </div>
          <div>
            <form action="#">
              <div class="custom-input">
                <img src="../assets/doctor.png">
                <select name="doctor">
                  <option value="default" selected="selected">Choose a doctor</option>
                  <option value="doctor" v-for="post in getPosts" :key="post.id">
                    <h2 class="text-capitalize h5 mb-0">{{post.name}}</h2>
                  </option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div>
            <form action="#">
              <div class="custom-input" id="message-input">
                <img src="../assets/text.png" class="img">
                <input type="text" name="text" placeholder="Message">
              </div>
            </form>
          </div>
        </div>
        <button class="button" type="submit">Submit Request</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'Messages',
  computed: {
        ...mapGetters([
            "getPosts"
        ]), // mapGetters() will return ["getPosts"] => "getPosts"
    }
}
</script>

<style scoped>
.message {
  width: 100%;
}
.button {
  margin: 1.5em 0em 1.5em 30em;
  border: 1px solid #999797 ;
  border-radius: 2em;
}
h3 {
    text-align: left;
}
h4 {
  font-size: 1em;
  padding:  1em 1.5em 1em 1.5em;
}
.box {
  width: 60%;
  margin: auto;
  display: block;
  border: 1px solid #e6e4e4;
  background-color: white;
}

a {
  color: black;
}

.row {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

#message-input {
  width: 39em;
  height: 7em;
  margin-left: 2em;
  margin-right: 2em;
}
.custom-input {
  background-color: white;
  border: 2px solid #ededed;
  margin-left: 1.5em;
  margin-right: 1.5em;
  padding: 5px;
  width: 18em;
  border-radius: 5px;
  text-align: start;
}

.custom-input>* {
  vertical-align: middle;
  width: 90%;
}

.custom-input img {
  width: 14px;
  height: 14px;
  display: inline-block;
}

.custom-input input {
  border: none;
  height: 18px;
  display: inline-block;
  outline: none;
  margin-left: 0.5em;
}

.custom-input select {
  border: none;
  height: 18px;
  display: inline-block;
  outline: none;
  margin-left: 0.5em;
}

select {
  font-size: 0.8em;
  margin-left: -1.2em;
}

input {
  width: 80%;
  font-size: 0.8em;
}


</style>