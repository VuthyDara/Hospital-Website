<template>
  <div class="stomach">
    <h4>GI Center</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img src="../assets/gi.jpg">
        </div>
        <div>
            <p>This area of medicine pertains to problems of the digestive system and liver. Our GI Specialists perform a comprehensive range of diagnostic and treatment options 
                including both colonoscopic and gastroscopic examinations.</p>
            <p>The human gastrointestinal tract is composed of the oesophagus, stomach, small intestine, colon, rectum, liver, gallbladder, bile ducts, and pancreas. All of 
                these are important internal organs involved in the processing of what we eat in order to gain nutrients and to provide our body with energy. These processes 
                extend from digestion up until food is released from our body as waste. If at any time these organs show signs of disorder, it is an indication of the possible 
                progression of infection and illness.</p>
            <p>Do not wait for symptoms to occur or worsen before it is too late.</p> 
        </div>
    </div>
    <h4>GI Center Team</h4>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Stomach'
}
</script>

<style scoped>
.stomach {
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
