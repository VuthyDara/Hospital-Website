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
      <a href="#" class="func">Customer Feedback</a>
    </div>
    <div>
      <p>Follow Us</p>
      <hr>
      <a href="#" class="func">Facebook</a>
      <a href="#" class="func">Instagram</a>
    </div>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15635.417304425806!2d104.880558!3d11.562299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd07843ea8349e8c1!2sRoyal%20Phnom%20Penh%20Hospital!5e0!3m2!1sen!2skh!4v1618934684188!5m2!1sen!2skh" width="300" height="150" style="border:0; right: 0" allowfullscreen="" loading="lazy"></iframe>
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

.map {
  width: 30%;
}

.func {
  display: block;
  color: black;
  text-decoration: none;
}
</style>
