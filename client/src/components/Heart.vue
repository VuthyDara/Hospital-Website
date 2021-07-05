<template>
  <div class="heart">
    <h4>Cardiology</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img src="../assets/cardiology.jpg">
        </div>
        <div>
            <p>Heart problems are quite common in Cambodia – especially heart attacks, which can be fatal and require proper treatment urgently.</p>
            <p>RPH has recently opened its Cardiology Center, which houses a team of cardiac specialists from Thailand.</p>
            <p>RPH’s Cardiac Catheterization Laboratory provides cardiac angiography that will visualize abnormalities in the heart. The Cardiac Care Unit also provides 
                percutaneous intervention that will relieve occluded coronary arteries.</p> 
        </div>
    </div>
    <h4>Cardiology Team</h4>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Heart'
}
</script>

<style scoped>
.heart {
    width: 90%;
    margin: auto;
}

.content {
    display: flex;
}

.left {
    width: 100%;
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
