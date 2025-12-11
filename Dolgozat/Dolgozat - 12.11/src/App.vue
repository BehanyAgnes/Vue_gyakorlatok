<template>
<div class="app-container">
<h1 class="title">Receptek</h1>


<div v-if="loading">Betöltés...</div>
<div v-else class="card-grid">
<FoodCard
v-for="item in receptek"
:key="item.id"
:title="item.nev"
:img="item.kep"
/>
</div>
</div>
</template>


<script>
import FoodCard from './components/FoodCard.vue'


export default {
components: { FoodCard },
data() {
return {
receptek: [],
loading: true
}
},
mounted() {
fetch('./data.json')
.then(res => res.json())
.then(data => {
this.receptek = data.receptek
this.loading = false
})
}
}
</script>


<style>
.app-container {
max-width: 1100px;
margin: auto;
padding: 20px;
font-family: Arial, sans-serif;
}


.title {
text-align: center;
margin-bottom: 20px;
}


.card-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 20px;
}
</style>