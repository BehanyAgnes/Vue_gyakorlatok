<script setup>
import { ref, onMounted } from 'vue'

const destinations = ref([])

function openDestination(city) {
  console.log(city, "megnyitva!")
}

onMounted(async () => {
  const res = await fetch('/data/destinations.json')
  const data = await res.json()
  destinations.value = data.destinations
})
</script>

<template>

    <h3 class="foszoveg">Foglalj közvetlen járatokat a Wizz Airrel</h3>
  <section class="destinations">
   
    <div 
      class="item"
      v-for="d in destinations"
      :key="d.city"
      @click="openDestination(d.city)"
    >
      <img :src="d.image" />
      <h3>{{ d.city }}</h3>
      <p>{{ d.price }} Ft/fő</p>
      <button class="itembtn">Elolvasom</button>
    </div>

  </section>
  
    <div class="kompenzacio">
        <img src="/src/assets/img/info.png" alt="" style="width: 20px; padding-right: 10px;">
        <span>Kompenzáció és jogi tájékoztatások</span>
        <p> Utasfelvétellel kapcsolatos információk, kompenzáció</p>
        <button class="itembtn">További információk</button>
    </div>

    <section class="kiegeszito_szolgaltats">
        

    </section>
</template>

<style scoped>

.foszoveg
{
  font-weight: 900;
  color: #06038D;
  margin-left: 100px;

}

.destinations {
  width: 1200px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
  text-align: center;
}

.item {
  background: #F2F2F2;
  padding: 40px;
  color: #C6007E;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.item:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.itembtn {
  background-color: #06038D;
  color: #f2f2f2;
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-top: 10px;
}

.itembtn:hover {
  background-color: #0b08c9;
}

.kompenzacio
{
 border: #06038D 2px solid;
 border-radius: 6px;
 padding: 60px;
  width: 500px;
  margin-left: 70px;
  margin-top: 70px;
 
}

.kompenzacio p
{
    text-align: justify;
   
}

span
{
    font: bold;
}
</style>
