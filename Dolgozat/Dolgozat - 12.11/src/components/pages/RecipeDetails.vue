<template>
  <div v-if="recept" class="container mt-5">
    <div class="row">
      <div class="col-lg-4 text-center">
        <img :src="recept.kep" class="img-fluid mb-3" :alt="recept.nev" />
      </div>
      <div class="col-lg-8">
        <h2>{{ recept.nev }}</h2>
        <h5>{{ recept.kategoria }}</h5>
        <div class="card mb-3">
          <div class="card-body">
            <strong>Recept adatai</strong>
            <div>Azonosító: {{ recept.id }}</div>
            <div>Kategória: {{ recept.kategoria }}</div>
          </div>
        </div>
        <div class="mb-3">
          <strong class="fs-3">Leírás</strong>
          <p>{{ recept.leiras }}</p>
        </div>
        <div class="mb-3">
          <strong class="fs-3">Értékelés</strong>
          <div class="progress">
            <div class="progress-bar bg-success" :style="`width:${recept.pont*10}%`">
              {{ recept.pont }}/10
            </div>
          </div>
          <small>Felhasználók értékelése alapján</small>
        </div>
        <button class="btn btn-secondary me-2" @click="$router.push('/receptek')">Vissza a receptekhez</button>
        <button class="btn btn-primary">Kedvencekhez</button>
      </div>
    </div>
  </div>

  <div v-else class="container mt-5">
    <p>Nincs ilyen recept azonosítóval.</p>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { useReceptekStore } from '../stores/receptek'
import { computed, onMounted } from 'vue'

const route = useRoute()
const receptekStore = useReceptekStore()

onMounted(() => receptekStore.fetchReceptek())

const recept = computed(() =>
  receptekStore.receptek.find(r => r.id == route.params.id)
)
</script>