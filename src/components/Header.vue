<template>
  <header>
    <div class="container">
      <div @click="goHome" class="logo-wrapper">
        <img src="/src/assets/img/logo.png" class="logo" alt="logo">
      </div>

      <nav>
        <a @click="goFlights">Repülőutak</a>
        <a @click="goHotels">Szállások</a>
        <a @click="goReviews">Vélemények</a>
        <a @click="goLogin">Bejelentkezés</a>
        <button class="searc" @click="goSearch">Keresés</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
function goHome() { console.log("Home") }
function goFlights() { console.log("Flights") }
function goHotels() { console.log("Hotels") }
function goReviews() { console.log("Reviews") }
function goLogin() { console.log("Login") }
function goSearch() { console.log("Search") }
</script>

<style scoped>
header {
  background: #06038D;
  border-bottom: 1px solid #ddd;
  height: 70px;
  display: flex;
  align-items: center;
}

.container {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
}

nav a {
  margin: 10px;
  padding: 10px;
  color: #F2F2F2;
  cursor: pointer;
  transition: 0.2s;
}

nav a:hover {
  text-decoration: underline;
}

.logo-wrapper {
  cursor: pointer;
}

.logo {
  width: 80px;
  margin-bottom: 10px;
  margin-right: 200px;
}

.searc {
  background-color: #06038D;
  color: #f2f2f2;
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  border: none;
}
.searc:hover {
  background-color: #0b08c9;
}
</style>
