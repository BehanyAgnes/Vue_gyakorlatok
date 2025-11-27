<template>
  <div class="app-container">
    <Header />

    <transition name="page" mode="out-in">
      <router-view />
    </transition>

    <Footer />

    <!-- Scroll to top gomb -->
    <button 
      v-show="showScrollTop" 
      @click="scrollToTop" 
      class="scroll-top-btn"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  overflow-x: hidden;
}

.app-container {
  position: relative;
  min-height: 100vh;
}

/* Oldal átmenet animáció */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Scroll to top gomb */
.scroll-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #d4145a, #a00c46);
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(212, 20, 90, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-top-btn:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 6px 20px rgba(212, 20, 90, 0.6);
  background: linear-gradient(135deg, #ff1a6d, #d4145a);
}

.scroll-top-btn:active {
  transform: translateY(-2px) scale(1.05);
}

/* Általános animációk */
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

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
</style>