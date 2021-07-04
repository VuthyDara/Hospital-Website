<template>
  <div class="brain">
    <h4>Neurology</h4>
    <hr>
    <div class="content">
        <div class="left">
            <img src="../assets/neurology01.jpg">
        </div>
        <div>
            <p>Certain symptoms such as severe headache, nausea, vomiting, sudden weakness of legs or arms, abnormal facial expression, and slurred speech are important 
                signs of stroke, which may be caused by vascular thrombosis or a hemorrhage in the brain. Patients need to come to the hospital immediately for an examination 
                using RPH’s computer tomography (CT scan) or magnetic resonance imaging (MRI) to detect the significance and impact of these symptoms. By providing immediate 
                treatment that is specific to issues found through diagnostic imaging, patients can be saved from physical impairments such as paralysis.</p>
            <p>Motorcycle accidents are also a major cause of skull fracture and brain hemorrhage in Cambodia. Victims of accidents also require immediate diagnostic imaging 
                and potentially an operation to reduce the risk of permanent brain damage or paralysis.</p>
        </div>
    </div>
    <h4>Neurology Team</h4>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Brain'
}
</script>

<style scoped>
.brain {
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
