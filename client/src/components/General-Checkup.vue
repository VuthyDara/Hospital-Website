<template>
  <div class="generalcheckup">
    <h4>General Checkup</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img src="../assets/generalcheckup.jpg">
        </div>
        <div>
            <p>As a general rule, the best chance of treating a disease is catching it before symptoms arise. Many serious illnesses are not apparent at first and can go for months 
            undetected while they cause irreparable damage.</p>
            <p>Regular check-ups with a physician are very important for health promotion, disease prevention and early detection of many diseases including diabetes, hypertension, 
                hyper-cholesterolemia, kidney diseases, and cancers including breast, colon, stomach, cervical and uterus.</p>
            <p>Check-up services at RPH are administered with the same standards as at any of the BDMS family of hospitals in Thailand and across the region. Services consist of a blood
                test, detection of tumor markers, chest X-ray, echo-cardiogram, exercise stress tests, ultrasound, and others. Check-up services are provided by doctors who specialize in 
                health screening. Cambodians and expatriates in Cambodia will save money and time in receiving the same quality check-up at Royal Phnom Penh Hospital, compared with going 
                abroad.</p> 
        </div>
    </div>
    <h4>General Checkup Team</h4>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'General-Checkup'
}
</script>

<style scoped>
.generalcheckup {
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
