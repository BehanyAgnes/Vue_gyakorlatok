<template>
  <Header />

  <div class="layout">
    <SidebarLeft />
    <MainContent />
    <SidebarRight />
  </div>

  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import SidebarLeft from './components/SidebarLeft.vue'
import SidebarRight from './components/SidebarRight.vue'
import MainContent from './components/MainContent.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 200px 1fr 250px;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
