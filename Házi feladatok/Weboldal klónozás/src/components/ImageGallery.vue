<template>
  <div class="gallery">
    <button class="nav prev" @click="prev">‹</button>

    <div class="image-wrapper">
      <img :src="images[currentIndex]" alt="gallery image" />
    </div>

    <button class="nav next" @click="next">›</button>
  </div>

  <div class="indicators">
    <span
      v-for="(img, i) in images"
      :key="i"
      @click="goTo(i)"
      :class="{ active: i === currentIndex }"
    ></span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length
}

function goTo(i) {
  currentIndex.value = i
}
</script>

<style scoped>
.gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.image-wrapper {
  width: 450px;
  height: 300px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #ccc;
}

.nav {
  background: white;
  border: 1px solid #aaa;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
}

.indicators {
  margin-top: 10px;
  text-align: center;
}

.indicators span {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #ddd;
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
}

.indicators .active {
  background: #888;
}
</style>
