<template>
    <div class="alltips">
        <div class="box">
            <h3>Health Tips</h3><hr>
            <div class="row">
                <a href="#">
                    <div class="box">
                    <img src="../assets/tip1.jpg" width="200">
                    <label>Tip 1</label>
                    </div>
                </a>
                <a href="#">
                    <div class="box">
                    <img src="../assets/tip2.jpg" width="200">
                    <label>Tip 2</label>
                    </div>
                </a>
                <a href="#">
                    <div class="box">
                    <img src="../assets/tip3.jpg" width="200">
                    <label>Tip 3</label>
                    </div>
                </a>
                <a href="#">
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
  width: 100%;
}
.tips {
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
.row {
    display: flex;
    justify-content: space-between;
}

img {
    width: 100%;
    margin: 2em 0 2em 0;
}
.title {
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