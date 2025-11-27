<template>
  <header class="header">
    <div class="topnav">

        <!-- Hamburger gomb mobilra -->
      <button class="hamburger" @click="toggleMenu">
        &#9776;
      </button>


      <!-- Logo -->
      <a class="logo-link" href="#home">
        <img src="/img/logo.png" alt="Wikipédia logó" class="logo"  />
      </a>

  
      
      <!-- Kereső -->
<div>
  <input
    type="text"
    placeholder="Keresés a Wikipédián"
    class="search"
    v-model="searchQuery"
    @input="onSearch"
  />
  <button class="search-button" @click="onSearchClick">Keresés</button>
</div>
     

      <!-- Menü linkek -->
      <nav :class="{'nav-links': true, 'active': menuOpen}">
        <a href="#adomanyok" @click="closeMenu">Adományok</a>
        <a href="#fiok" @click="closeMenu">Fiók létrehozása</a>
        <a href="#bejelentkezes" @click="closeMenu">Bejelentkezés</a>
      </nav>

      
    </div>
    <div>
      <p class="november_honap">November: Ázsia-hónap a Wikipédián.
         Csatlakozz te is, és nyerj ázsiai képeslapokat!</p>
    </div>
  </header>
</template>


<script setup>
import { ref } from 'vue';


const menuOpen = ref(false);
const searchQuery = ref('');

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}

function onSearch() {
  console.log('Keresés:', searchQuery.value);
}
</script>

<style scoped>
.header {
  background-color: #f8f9fa;
  padding: 0.5rem 1rem;
}

.topnav {
  display: flex;
  align-items: center;

  justify-content: center;
  flex-wrap: wrap;
}

.logo {
  width: 100px;
}

.kereses
{
 
  margin: 20px;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
 
  color: #000;
}

.search {
  width: 500px;
  
}

/* Hamburger gomb mobilra */
.hamburger {

  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.november_honap
{
  text-align: center;
  font-weight: bold;
  border: 1px solid;
  padding: 20px;
}


/* Mobil nézet */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 0.5rem;
  }

  .nav-links.active {
    display: flex;
  }

  .search {
    margin-top: 0.5rem;
    width: 100%;
  }
}


</style>
