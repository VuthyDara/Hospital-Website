<template>
    <div class="patients">
        <div class="box">
            <h3>Patient's stories</h3>
            <div class="row">
                <div class="story">
                <img src="../assets/story1.jpg">
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quibusdam expedita magnam
                    distinctio beatae nihil accusantium, asperiores earum corrupti. Minima saepe eos 
                    <br/>
                    <router-link to="/patient1">See more></router-link>
                </span>
                </div>
                 <div class="story">
                <img src="../assets/story2.jpg">
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quibusdam expedita magnam
                    distinctio beatae nihil accusantium, asperiores earum corrupti. Minima saepe eos 
                    <br/>
                    <router-link to="/patient2">See more></router-link>
                </span>
                </div>
            </div>
            <div class="row">
                <div class="story">
                <img src="../assets/story3.jpg">
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quibusdam expedita magnam
                    distinctio beatae nihil accusantium, asperiores earum corrupti. Minima saepe eos 
                    <br/>
                    <router-link to="/patient3">See more></router-link>
                </span>
                </div>
                 <div class="story">
                <img src="../assets/story4.jpg">
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quibusdam expedita magnam
                    distinctio beatae nihil accusantium, asperiores earum corrupti. Minima saepe eos 
                    <br/>
                    <router-link to="/patient4">See more></router-link> 
                </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'patients',
  components: {
  }
}
</script>

<style scoped>
.patients {
  width: 100%;
}
h3 {
    text-align: left;
}
.row {
    display: flex;
    justify-content: space-between;
}
.story {
    width: 40%;
    text-align: left;
}
img {
    width: 100%;
    margin: 2em 0 2em 0;
}

.box {
  width: 100%;
  display: block;
  background-color: white;
}




</style>