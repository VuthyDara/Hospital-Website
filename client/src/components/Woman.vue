<template>
  <div class="woman">
    <h4>Obstetric & Gynecology</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img src="../assets/woman1.jpg">
        </div>
        <div>
            <p>With the state-of-art equipment and modern facility with very well trained doctors and nurses, Royal Phnom Penh Hospital Obstetrics & Gynecology center are ready 
                to diverse need of women for their different in life stages.</p>
            <p>We provide the all kind of treatment from the preventive care to the critical treatment including diagnostic, comprehensive health screenings, as well as 
                antenatal care and child delivery for expectant mothers.</p>
            <p>For the comfortable and safe for all women, we also provide the all kindly of specialty for women disease and provide a range of comprehensive healthcare 
                service in a comfortable private atmosphere.</p> 
        </div>
    </div>
    <h4>Obstetric & Gynecology Team</h4>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Woman'
}
</script>

<style scoped>
.woman {
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
