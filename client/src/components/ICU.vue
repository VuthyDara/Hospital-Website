<template>
  <div class="ICU">
    <h4>Intensive Care Unit (ICU)</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img src="../assets/icu.jpg">
        </div>
        <div>
            <p>Our Department of Critical Care Medicine provides comprehensive medical management for individuals with critical life-threatening illnesses, major injuries and 
                post-operative care following intensive surgery.</p>
            <p>We provide 24 hour care with specialized treatments for patients in various life-threatening and critical conditions. Our Intensive Care Unit (ICU) team provides 
                fast and efficient diagnosis, treatment and monitoring of each patient’s condition.</p>
            <p>The Intensive Care Unit is fully-equipped with the latest medical devices, technology and equipment, including patient monitors, ventilators, dialysis machines etc.</p>
        </div>
    </div>
    <h4>Intensive Care Unit (ICU) Team</h4>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ICU'
}
</script>

<style scoped>
.ICU {
    width: 90%;
    margin: auto;
}

.content {
    display: flex;
}

.left {
    width: 300%;
}

img {
    width: 100%;
    left: 0px;
}
h4 {
    text-align: left;
}

hr {
    margin: 0px;
    margin-bottom: 5px;
}

p {
    font-size: 12px;
}
</style>
