<template>
  <section class="hero">
    <BookingBox />
  
  </section>
</template>

<script setup>
import BookingBox from './BookingBox.vue'
</script>

<style scoped>
.hero {
  height: 500px;
  background: url('/src/assets/img/hero.jpg') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
