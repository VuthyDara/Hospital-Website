<template>
  <div class="children">
    <h4>Pediatric</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img src="../assets/chidlren.jpg">
        </div>
        <div>
            <p>Illness in children can range from minor diseases such as fever and a common cold to severe problems including Hand, Foot and Mouth disease. Caring for the 
                smallest members of our community lies at the heart of the RPH.</p>
            <p>Prevention of communicable diseases can be done through vaccination following guidelines recommended by the World Health Organization (WHO).</p>
            <p>RPH has separate Sick Baby and Well Baby Clinics to prevent cross infection among sick and well babies.</p> 
        </div>
    </div>
    <h4>Pediatric Team</h4>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Children'
}
</script>

<style scoped>
.children {
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
