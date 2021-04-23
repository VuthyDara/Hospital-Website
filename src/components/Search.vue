<template>
    <div class="search">
        <div class="left">
            <div class="row">
                <div class="box">
                    <a href="#">
                        <div class="in">
                            <img src="../assets/icon.png" width="48" height="48">
                            <label>Find a Doctor</label>
                        </div>
                    </a>             
                </div>
                <div class="box">
                    <div>
                        <a href="#">
                            <img src="../assets/icon.png" width="48" height="48">
                            <label>Make an appointment</label>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row2">
                <form action="#">
                    <div>
                        <input type="text" name="search" placeholder="Search for doctor">
                    </div>
                </form>
            </div>
        </div>
        <div class="right">
            <img src="../assets/img.png">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
.search {
    margin: 0px 100px;
    height: 350px;
    display: flex;
}

.box {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.in {
    width: 80px;
    height: 101px;
    display: block;
}

.row {
    display: flex;
}

.left {
    display: block;
    padding: 50px;
}

.right {
    width: 60%;
    margin-right: 0px;
}
</style>
