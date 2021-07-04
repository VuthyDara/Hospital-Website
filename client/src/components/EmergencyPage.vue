<template>
  <div class="emergencypage">
    <h4>Emergency & Trauma</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img src="../assets/trauma.jpg">
        </div>
        <div>
            <p>Accidents can always occur without warning. However, the impact can be mitigated. 24 hours a day, 7 days a week, Royal Phnom Penh Hospital provides emergency 
                medical services by a team comprised of Thai and Cambodian emergency physicians. This combination helps to ease communication with Khmer patients while ensuring 
                safe and effective treatment for everyone.</p>
            <p>The Royal Emergency Services (RES), which provide an ambulance and a medical emergency team, picks up emergency patients outside the hospital. It is well equipped 
                by the same standards as the Bangkok Emergency Medical Services.</p>
            <p>After being picked up by an RES ambulance, the patient will be treated in the emergency room, and then will be admitted to either the Intensive Care Unit (ICU), 
                general ward, or to the operating room. If the patient needs further treatment abroad, the Air Evacuation Emergency Medical team can escort the patient to 
                Bangkok or any country via charter or commercial flights.</p> 
        </div>
    </div>
    <h4>Emergency & Trauma Team</h4>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'EmergencyPage'
}
</script>

<style scoped>
.emergencypage {
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
