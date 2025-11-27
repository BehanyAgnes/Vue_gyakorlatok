<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Wizz<span class="accent">Air</span></h3>
        <p>Repülj velünk a legjobb árakon!</p>
        <div class="social-icons">
          <a href="#" class="social-icon" aria-label="Facebook">
            <span>f</span>
          </a>
          <a href="#" class="social-icon" aria-label="Instagram">
            <span>i</span>
          </a>
          <a href="#" class="social-icon" aria-label="Twitter">
            <span>t</span>
          </a>
        </div>
      </div>

      <div class="footer-section">
        <h4>Rólunk</h4>
        <ul>
          <li><a href="#">Céginfo</a></li>
          <li><a href="#">Karrier</a></li>
          <li><a href="#">Sajtó</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Támogatás</h4>
        <ul>
          <li><a href="#">Gyakori kérdések</a></li>
          <li><a href="#">Kapcsolat</a></li>
          <li><a href="#">Segítség</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Jogi</h4>
        <ul>
          <li><a href="#">Adatvédelem</a></li>
          <li><a href="#">Felhasználási feltételek</a></li>
          <li><a href="#">Cookie szabályzat</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 WizzAir Clone. Minden jog fenntartva.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  animation: fadeInUp 0.6s ease-out;
}

.accent {
  color: #d4145a;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #d4145a;
  animation: fadeInUp 0.6s ease-out 0.1s backwards;
}

.footer-section p {
  color: #aaa;
  line-height: 1.6;
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
  animation: fadeInUp 0.6s ease-out backwards;
}

.footer-section ul li:nth-child(1) {
  animation-delay: 0.1s;
}

.footer-section ul li:nth-child(2) {
  animation-delay: 0.2s;
}

.footer-section ul li:nth-child(3) {
  animation-delay: 0.3s;
}

.footer-section ul li a {
  color: #ddd;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.footer-section ul li a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #d4145a;
  transition: width 0.3s ease;
}

.footer-section ul li a:hover {
  color: white;
  transform: translateX(5px);
}

.footer-section ul li a:hover::after {
  width: 100%;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(212, 20, 90, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4145a;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out backwards;
}

.social-icon:nth-child(1) {
  animation-delay: 0.3s;
}

.social-icon:nth-child(2) {
  animation-delay: 0.4s;
}

.social-icon:nth-child(3) {
  animation-delay: 0.5s;
}

.social-icon:hover {
  background: #d4145a;
  color: white;
  transform: translateY(-5px) rotate(360deg);
  box-shadow: 0 5px 15px rgba(212, 20, 90, 0.4);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #888;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>