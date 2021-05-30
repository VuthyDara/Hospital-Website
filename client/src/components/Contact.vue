<template>
  <div class="contact">
    <h3>Contact Us</h3><hr>
    <div class="box">
      <h4>Thank you for contacting Our Hospital.<br>
Please use this form for inquiries about our services or for sharing your feedback.</h4>
      <div class="row">
        <div>
          <form action="#">
            <div class="custom-input">
              <img src="../assets/patient.png">
              <input type="text" name="patient_name" placeholder="Full Name">
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div>
            <form action="#">
              <div class="custom-input">
                <img src="../assets/phonenumber.png">
                <input type="text" name="phone_number" placeholder="Phone Number">
              </div>
            </form>
          </div>   
          <div>
            <form action="#">
              <div class="custom-input">
                <img src="../assets/email.png">
                <input type="text" name="email" placeholder="Email Address">
              </div>
            </form>
          </div>
         </div>
         <div class="row">
          <div>
            <form action="#">
              <div class="custom-input" id="contact-input">
                <img src="../assets/text.png" class="img">
                <input type="text" name="text" placeholder="Message...">
              </div>
            </form>
          </div>
        </div>
        <div class="row">
         <h5>Thanks you for contacting with Our Hospital!<br>
Our customer service will contact you back soon..</h5>
        <button class="button" type="submit">Submit Request</button>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  components: {
  }
}
</script>

<style scoped>
.contact {
  width: 100%;
}
.button {
  margin: 1.5em 0em 1.5em 30em;
  border: 1px solid #999797 ;
  border-radius: 2em;
}
h3 {
    text-align: left;
    font-size: 1.5em;
}
h5 {
  text-align: left;
}
hr {
    margin-top: -0.5em;
}
h4 {
  font-size: 1em;
  padding:  1em 1.5em 1em 1.5em;
}
#national {
  width: 20px;
  height: 20px;
}
.box {
  width: 70%;
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

#contact-input {
  width: 43em;
  height: 10em;
  margin-left: 2em;
  margin-right: 2em;
}
.custom-input {
  background-color: white;
  border: 2px solid #ededed;
  margin-left: 1.5em;
  margin-right: 1.5em;
  padding: 5px;
  width:20em;
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


input {
  width: 80%;
  font-size: 0.8em;
}


</style>