<template>
  <div class="container">
    <h2 class="my-4 text-center">Receptek</h2>
    <div class="row">
      <ReceptCard v-for="recept in receptekStore.receptek"
                :key="recept.id"
                :recept="recept"
                @details="showDetails" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useReceptekStore } from '../stores/receptek'
import ReceptCard from '../components/ReceptCard.vue'

const receptekStore = useReceptekStore()
onMounted(() => receptekStore.fetchReceptek())
const showDetails = id => { console.log('Recept azonosító:', id) }
</script>