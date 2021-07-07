<template>
    <div class="alltips">
        <div class="container">
            <h3>Health Tips</h3><hr>
            <div class="row">
                <a href="http://localhost:8080/tip1">
                    <div class="box">
                    <img src="../assets/tip1.jpg" width="200">
                    <label>Tip 1</label>
                    </div>
                </a>
                <a href="http://localhost:8080/tip2">
                    <div class="box">
                    <img src="../assets/tip2.jpg" width="200">
                    <label>Tip 2</label>
                    </div>
                </a>
                <a href="http://localhost:8080/tip3">
                    <div class="box">
                    <img src="../assets/tip3.jpg" width="200">
                    <label>Tip 3</label>
                    </div>
                </a>
                <a href="http://localhost:8080/tip4">
                    <div class="box">
                    <img src="../assets/tip4.png" width="200">
                    <label>Tip 4</label>
                    </div>
                </a>
            </div>
        </div> 
    </div> 
</template>

<script>
export default {
  name: 'Alltips'
}
</script>

<style scoped>

.alltips {
  /*margin: auto;*/
  display: block;
  height: 220px;
  margin-top: 3em;
}

h3 {
    text-align: left;
}
hr {
    margin-top: -0.5em;
}
img {
  margin-left: -5em;
}

.title {
  display: flex;
  justify-content: space-between;
}

.row {
  display: flex;
  justify-content: space-between;
}

.box {
  width: 20%;
  display: block;
}

label {
  font-size: 12px;
  margin: auto;
}
</style>