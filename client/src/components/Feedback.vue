<template>
  <router-view/>
  <LatestNews></LatestNews>
</template>

<script>
import LatestNews from './LatestNews.vue'

export default {
  name: 'Feedback',
  components: {
    LatestNews
  }
}
</script>

<style>

</style>
