<template>
  <div class="message">
    <div class="box">
      <span>You can use this form to book appointment with our doctor.
Before booking any appointment make sure you have checked the doctor's schedule.</span>
      <div class="row">
        <div>
          <form action="#">
            <div>
              <img src="../assets/patient.png">
              <input type="text" name="patient_name" placeholder="Patient's Name">
            </div>
          </form>
        </div>
        <div>
            <form action="#">
              <div>
                <img src="../assets/phonenumber.png">
                <input type="text" name="phone_number" placeholder="Phone Number">
              </div>
            </form>
          </div>
        </div>    
        <div class="row">
          <div>
            <form action="#">
              <div>
                <img src="../assets/email.png">
                <input type="text" name="email" placeholder="Email Address">
              </div>
            </form>
          </div>
          <div>
            <form action="#">
              <div>
                <img src="../assets/date.png">
                <input type="text" name="date" placeholder="Choose Date">
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div>
            <form action="#">
              <div>
                <img src="../assets/department.png">
                <input type="text" name="department" placeholder="Choose a department">
              </div>
            </form>
          </div>
          <div>
            <form action="#">
              <div>
                <img src="../assets/doctor.png">
                <input type="text" name="doctor" placeholder="Choose a doctor">
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div>
            <form action="#">
              <div>
                <img src="../assets/text.png">
                <input type="text" name="text" placeholder="Message">
              </div>
            </form>
          </div>
        </div>
        <button type="submit">Submit Request</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  components: {
  }
}
</script>

<style scoped>
.message {
  width: 100%;
  height: 300px;
}

.search {
  display: flex;
  height: 300px;
  width: 80%;
  margin: auto;
}

.box {
  width: 100%;
  height: 100px;
  margin: auto;
  margin-right: 1em;
  display: block;
}

a {
  color: black;
}


.row {
  display: flex;
  justify-content: space-around;
}

input {
  width: 80%;
  margin-left: -1.2em;
  border-radius: 5px;
}

</style>
