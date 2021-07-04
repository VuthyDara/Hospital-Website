<template>
  <div class="feedback">
    <div class="box">
      <h4>As we aim to give you the utmost level of service and attention, we would love to hear from you 
        and to receive your comments and suggestions to help us better serve you. 
        Please feel free to write your message in the box below.</h4>
      <div class="row">
          <div>
            <form action="#">
              <div class="custom-input" id="feedback-input">
                <img src="../assets/text.png" class="img">
                <input
                  v-model="form.message" 
                  id="message" rows="3" 
                  @input="validateContent"
                  placeholder="Your Feedback or Suggestion.">
              </div>
            </form>
          </div>
        </div>
      <div class="row">
        <div>
          <form action="#">
            <div class="custom-input">
              <img src="../assets/patient.png">
              <input 
                  v-model="form.name" 
                  id="name" rows="1" 
                  @input="validateContent"
                  placeholder="Fullname">
            </div>
          </form>
        </div>
         <div>
            <form action="#">
              <div class="custom-input">
                <img id="national" src="../assets/national.png">
                <input
                  v-model="form.nationality"
                  id="nationality" rows="1" 
                  @input="validateContent"
                  placeholder="Nationality">     
              </div>
            </form>
          </div>
      </div>
      <div class="row">
        <div>
            <form action="#">
              <div class="custom-input">
                <img src="../assets/phonenumber.png">
                <input
                  v-model="form.tel"
                  id="tel" rows="1" 
                  @input="validateContent"
                  placeholder="Phone number">
              </div>
            </form>
          </div>   
          <div>
            <form action="#">
              <div class="custom-input">
                <img src="../assets/email.png">
                <input
                  v-model="form.email"
                  id="email" rows="1" 
                  @input="validateContent"
                  placeholder="Email">
              </div>
            </form>
          </div>
         </div>
         <div class="last">
          <h5>We would like to thank you on behalf of Our Hospital <br>and our team for giving us the opportunity to serve you.</h5>
          <button class="button" @click="submitFeedback"  type="button" >Submit Request</button>
         </div>
     </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'Feedback',
  data() {
    return {
      form: {
        message: '',
        name: '',
        tel: '',
        email: '',
        nationality: ''
      },
      error: {}
    }
  },
  props: {
    msg: String
  },
  methods: {
    validateContent() {
      if (this.form.message && this.form.name && this.form.tel && this.form.email && this.form.nationality != "") {
        this.error.message = null
      }
    },
    submitFeedback() {
      // Validation content
      if (this.form.message && this.form.name && this.form.tel && this.form.email && this.form.nationality == "") {
        this.error.message = "Everything should be filled"
      }
      // Post content to server
      axios.post('http://localhost:4000/feedbacks', this.form)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  computed: {
    hasError() {
      if(this.error.message) return true
      return false
    },
    ...mapGetters([
      "getFeedbacks"
    ]), // mapGetters() will return ["getPosts"] => "getPosts"
  }
}
</script>

<style scoped>
.feedback {
  width: 100%;
}
.button {
  border: 1px solid #999797 ;
  border-radius: 1em;
  height: 2em;
  margin-top: 1em;
}
h5 {
  text-align: left;
}

h4 {
  font-size: 1em;
  padding: 1.5em 4em 1.5em 4em;
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

.last {
  display: flex;
  justify-content: space-between;
  padding: 2em 4em 2em 4em;
}

#feedback-input {
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

.custom-input select {
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
