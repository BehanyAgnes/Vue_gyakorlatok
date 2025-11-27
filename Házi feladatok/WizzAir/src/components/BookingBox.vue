<script setup>
import { ref, onMounted } from 'vue'

const departureCity = ref('Budapest')
const destinationCity = ref('')
const departureDate = ref('')
const returnDate = ref('')
const passengers = ref(1)
const destinations = ref([])

const departureCities = [
  'Budapest',
  'Debrecen',
  'Szeged',
  'Pécs',
  'Győr'
]

const handleBooking = () => {
  if (!destinationCity.value || !departureDate.value) {
    alert('Kérlek töltsd ki az összes kötelező mezőt!')
    return
  }
  
  console.log('Foglalás adatok:', {
    from: departureCity.value,
    to: destinationCity.value,
    departure: departureDate.value,
    return: returnDate.value,
    passengers: passengers.value
  })
  
  alert(`Foglalás: ${departureCity.value} → ${destinationCity.value}\n${passengers.value} utas`)
}

onMounted(async () => {
  try {
    const res = await fetch('/data/destinations.json')
    const data = await res.json()
    destinations.value = data.destinations.map(d => d.city)
  } catch (error) {
    console.error('Hiba a célállomások betöltésekor:', error)
  }
})
</script>

<template>
  <div class="booking-panel">
    <div class="field">
      <label> Indulás</label>
      <select v-model="departureCity" class="indulasi">
        <option v-for="city in departureCities" :key="city" :value="city">
          {{ city }}
        </option>
      </select>
    </div>

    <div class="field">
      <label>Cél</label>
      <select v-model="destinationCity" class="indulasi" required>
        <option value="" disabled>Válassz célállomást</option>
        <option v-for="city in destinations" :key="city" :value="city">
          {{ city }}
        </option>
      </select>
    </div>

    <div class="field">
      <label> Indulás</label>
      <input 
        type="date" 
        v-model="departureDate" 
        class="indulasi"
        required
      />
    </div>

    <div class="field">
      <label>Érkezés</label>
      <input 
        type="date" 
        v-model="returnDate" 
        class="indulasi"
      />
    </div>
    
    <div class="field">
      <label> Utasok száma</label>
      <input 
        type="number" 
        v-model="passengers" 
        class="indulasi" 
        min="1" 
        max="9"
      />
    </div>

    <button @click="handleBooking" class="booking-btn">
      Foglalás
    </button>
  </div>
</template>

<style scoped>
.booking-panel {
  display: flex;
  background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
  border-radius: 20px;
  padding: 20px;
  gap: 15px;
  align-items: center;
  border: 2px solid #e0e0e0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  margin: 30px auto;
  max-width: 1400px;
  animation: fadeInUp 0.6s ease-out;
}

.field {
  background: white;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  padding: 12px 18px;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.field:hover {
  border-color: #C6007E;
  box-shadow: 0 4px 12px rgba(198, 0, 126, 0.15);
}

.field:focus-within {
  border-color: #06038D;
  box-shadow: 0 4px 16px rgba(6, 3, 141, 0.2);
  transform: translateY(-2px);
}

.field label {
  font-size: 12px;
  font-weight: bold;
  color: #06038D;
  display: flex;
  align-items: center;
  gap: 5px;
}

.indulasi {
  border: none;
  outline: none;
  font-size: 14px;
  color: #333;
  background: transparent;
  cursor: pointer;
  padding: 4px 0;
  font-family: Arial, sans-serif;
}

.indulasi:focus {
  color: #06038D;
  font-weight: 500;
}

select.indulasi {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2306038D' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 30px;
}

input[type="number"].indulasi {
  -moz-appearance: textfield;
}

input[type="number"].indulasi::-webkit-inner-spin-button,
input[type="number"].indulasi::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.booking-btn {
  background: linear-gradient(135deg, #c30083 0%, #d4145a 100%);
  color: white;
  border: none;
  padding: 18px 35px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(195, 0, 131, 0.3);
  white-space: nowrap;
}

.booking-btn:hover {
  background: linear-gradient(135deg, #d4145a 0%, #ff1a6d 100%);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(195, 0, 131, 0.4);
}

.booking-btn:active {
  transform: translateY(-1px) scale(1.02);
}

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

/* Reszponzív */
@media (max-width: 1200px) {
  .booking-panel {
    flex-wrap: wrap;
    justify-content: center;
  }

  .field {
    min-width: 140px;
  }
}

@media (max-width: 768px) {
  .booking-panel {
    flex-direction: column;
    padding: 20px;
  }

  .field {
    width: 100%;
    min-width: unset;
  }

  .booking-btn {
    width: 100%;
    padding: 16px;
  }
}
</style>