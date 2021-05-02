<template>
  <div class="message">
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
                <input type="text" name="department" placeholder="Choose a department">
              </div>
            </form>
          </div>
          <div>
            <form action="#">
              <div class="custom-input">
                <img src="../assets/doctor.png">
                <input type="text" name="doctor" placeholder="Choose a doctor">
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div>
            <form action="#">
              <div class="custom-input" id="message-input">
                <img src="../assets/text.png">
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
export default {
  name: 'Messages',
  components: {
  }
}
</script>

<style scoped>
.message {
  width: 100%;
  height: 300px;
}
.button {
  margin: 1.5em 0em 1.5em 30em;
  border-radius: 2em;
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
}

.custom-input>* {
  vertical-align: middle;
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

input {
  width: 80%;
  font-size: 0.8em;
  margin-left: -1.2em;
}


</style>