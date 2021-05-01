<template>
  <div class="footer">
    <div>
      <p>Center & Clinic</p>
      <hr>
      <a href="#" class="func">Make an Appointment</a>
      <a href="#" class="func">Patient's Story</a>
    </div>
    <div>
      <p>Health Tips</p>
      <hr>
      <a href="#" class="func">Health Tips</a>
      <a href="#" class="func">Disease & Treatment</a>
    </div>
    <div>
      <p>Contact Us</p>
      <hr>
      <a href="#" class="func">Contact Us</a>
      <a href="./Feedback.vue" class="func">Customer Feedback</a>
    </div>
    <div>
      <p>Follow Us</p>
      <hr>
      <a href="#" class="func">Facebook</a>
      <a href="#" class="func">Instagram</a>
    </div>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4094.5335693272027!2d104.89821043019819!3d11.568251495299217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517388680e15%3A0x63057e6682968f5!2z4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6f4Z-S4Z6Q4Z624Z6T4Z6U4Z6F4Z-S4Z6F4Z-B4Z6A4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6A4Z6Y4Z-S4Z6W4Z674Z6H4Z62!5e0!3m2!1sen!2skh!4v1619887537148!5m2!1sen!2skh" width="300" height="150" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

hr {
  margin-top: 0px;
}

.func {
  display: block;
  color: black;
  text-decoration: none;
}
</style>
