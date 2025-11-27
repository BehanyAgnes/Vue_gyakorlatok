<script setup>
import { ref, computed, onMounted } from 'vue'

const destinations = ref([])
const searchQuery = ref('')
const maxPrice = ref(1000000)

function openDestination(city) {
  console.log(city, "megnyitva!")
}


function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

const filteredDestinations = computed(() => {
  if (!searchQuery.value && maxPrice.value >= 1000000) {
    return destinations.value 
  }
  
  return destinations.value.filter(dest => {
    const cityNormalized = removeAccents(dest.city)
    const searchNormalized = removeAccents(searchQuery.value)
    const matchesSearch = searchQuery.value === '' || cityNormalized.includes(searchNormalized)
    const matchesPrice = dest.price <= maxPrice.value
    
    return matchesSearch && matchesPrice
  })
})


function clearSearch() {
  searchQuery.value = ''
  maxPrice.value = 1000000
}

onMounted(async () => {
  const res = await fetch('/data/destinations.json')
  const data = await res.json()
  destinations.value = data.destinations
})
</script>

<template>
  <div class="page-container">
    <h3 class="foszoveg">Foglalj közvetlen járatokat a Wizz Airrel</h3>

  
    <div class="search-container">
      <div class="search-box">
        <div class="search-input-group">
          <label for="city-search">Célállomás keresése</label>
          <input 
            id="city-search"
            type="text" 
            v-model="searchQuery" 
            placeholder="Írd be a város nevét..."
            class="search-input"
          />
        </div>

        <div class="search-input-group">
          <label for="price-filter"> Maximum ár: {{ maxPrice.toLocaleString() }} Ft</label>
          <input 
            id="price-filter"
            type="range" 
            v-model="maxPrice" 
            min="5000" 
            max="1000000" 
            step="5000"
            class="price-slider"
          />
        </div>

        <button @click="clearSearch" class="clear-btn">
          ✖ Törlés
        </button>
      </div>

      <div class="search-results-info">
        <p v-if="filteredDestinations.length > 0">
          <strong>{{ filteredDestinations.length }}</strong> találat
        </p>
        <p v-else class="no-results">
          Nincs találat a keresési feltételeknek megfelelően.
        </p>
      </div>
    </div>


    <section class="destinations">
      <div 
        class="item"
        v-for="d in filteredDestinations"
        :key="d.city"
        @click="openDestination(d.city)"
      >
        <img :src="d.image" :alt="d.city" />
        <h3>{{ d.city }}</h3>
        <p class="price">{{ d.price.toLocaleString() }} Ft/fő</p>
        <button class="itembtn">Elolvasom</button>
      </div>
    </section>

    <!-- Kompenzáció info -->
    <div class="kompenzacio">
      <div class="info-header">
        <img src="/src/assets/img/info.png" alt="Info" class="info-icon">
        <span class="info-title">Kompenzáció és jogi tájékoztatások</span>
      </div>
      <p>Utasfelvétellel kapcsolatos információk, kompenzáció</p>
      <button class="itembtn">További információk</button>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 100px;
  padding-bottom: 40px;
}

.foszoveg {
  font-weight: 900;
  color: #06038D;
  margin-left: 100px;
  margin-bottom: 30px;
  animation: fadeInDown 0.6s ease-out;
}

/* Kereső stílusok */
.search-container {
  width: 1200px;
  margin: 0 auto 40px;
  animation: fadeInUp 0.6s ease-out;
}

.search-box {
  background: linear-gradient(135deg, #06038D 0%, #0b08c9 100%);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(6, 3, 141, 0.2);
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 20px;
  align-items: end;
}

.search-input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.search-input-group label {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.search-input {
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.price-slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.3);
}

.price-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #C6007E;
  cursor: pointer;
  transition: all 0.3s ease;
}

.price-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 10px #C6007E;
}

.clear-btn {
  background-color: rgba(255, 255, 255, 0.2);
  color: #F2F2F2;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  height: fit-content;
}

.clear-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.search-results-info {
  margin-top: 20px;
  text-align: center;
  color: #06038D;
  font-size: 1.1rem;
}

.no-results {
  color: #C6007E;
  font-weight: 600;
}

.destinations {
  width: 1200px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-align: center;
}

.item {
  background: #F2F2F2;
  padding: 20px;
  color: #C6007E;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out backwards;
}

.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }
.item:nth-child(4) { animation-delay: 0.4s; }

.item:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.item:hover img {
  transform: scale(1.05);
}

.item h3 {
  margin: 10px 0;
  font-size: 1.3rem;
}

.price {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 10px 0;
}

.itembtn {
  background-color: #06038D;
  color: #f2f2f2;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-top: 10px;
  transition: all 0.3s ease;
  width: 100%;
}

.itembtn:hover {
  background-color: #0b08c9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(6, 3, 141, 0.3);
}

/* Kompenzáció */
.kompenzacio {
  border: #06038D 2px solid;
  border-radius: 12px;
  padding: 40px;
  width: 500px;
  margin: 70px auto 40px 100px;
  animation: fadeInLeft 0.8s ease-out;
  transition: all 0.3s ease;
}

.kompenzacio:hover {
  box-shadow: 0 10px 30px rgba(6, 3, 141, 0.15);
  transform: translateX(5px);
}

.info-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.info-icon {
  width: 24px;
  margin-right: 10px;
}

.info-title {
  font-weight: bold;
  font-size: 1.1rem;
  color: #06038D;
}

.kompenzacio p {
  text-align: justify;
  line-height: 1.6;
  margin: 15px 0;
}

/* Animációk */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Reszponzív */
@media (max-width: 1280px) {
  .destinations,
  .search-container {
    width: 95%;
    padding: 0 20px;
  }

  .search-box {
    grid-template-columns: 1fr;
  }

  .destinations {
    grid-template-columns: repeat(2, 1fr);
  }

  .kompenzacio {
    width: 90%;
    margin: 40px auto;
  }

  .foszoveg {
    margin-left: 20px;
  }
}

@media (max-width: 768px) {
  .destinations {
    grid-template-columns: 1fr;
  }
}
</style>