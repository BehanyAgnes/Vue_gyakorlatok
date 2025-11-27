<template>
  <main>

<ContentBox title="A nap képe: Nyárvégi délután">
  <div class="image-of-the-day">
    <img 
      src="https://ng.24.hu/uploads/2025/08/68af4cee7d318034688043567035116-scaled.jpg"
      alt="A nap képe"
      
    />
  </div>

  <figcaption>Egy kedves cankó keresgél élelem után a Tisza-tó egyik csatornáján, egy rég kidőlt, már mohás fatörzsről.</figcaption>
</ContentBox>


    <ContentBox title="Kiemelt kép galéria">
      <ImageGallery v-if="gallery" :images="gallery.images" />
      <p v-else>Betöltés…</p>
    </ContentBox>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ContentBox from './ContentBox.vue'
import ImageGallery from './ImageGallery.vue'

const gallery = ref(null)

onMounted(async () => {
  const res = await fetch('/data/gallery.json')
  gallery.value = await res.json()
  console.log("BETÖLTÖTT JSON:", gallery.value)
})
</script>


<style scoped>
.image-of-the-day {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-of-the-day img {
  width: 100%;
  max-width: 650px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

figcaption
{
  margin-top: 20px;

}


@media (hover: hover) {
  .image-of-the-day img:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 25px rgba(0,0,0,0.25);
  }
}

@media (max-width: 768px) {
  .image-of-the-day img {
    max-width: 90%;
    border-radius: 8px;
  }
}


@media (max-width: 480px) {
  .image-of-the-day img {
    max-width: 100%;
    border-radius: 6px;
  }
}


</style>