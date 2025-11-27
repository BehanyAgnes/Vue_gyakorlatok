A projekt elkezdéséhez szükséges parancsok:

npm create vite@latest klonozott_weboldal --template vue npm install ha van benne router: npm install vue-router

projekt elinditása: npm run dev

├─public  
  ├─├─ data/  
     ├─├─ destinations.json  
src/  
├─ components/  
│  ├─ BookingBox.vue  
│  ├─ Destionations.vue  
│  ├─ Footer.vue  
│  ├─ Header.vue  
├─router/  
  ├─index.js     
│ ├─ views/  
│  ├─ Bookin.vue  
|  ├─Home.vue  
|  ├─ Search.vue  
├─ App.vue  
├─stlye.css  
└─ main.js  

A projekt célja a WizzAir oldalának leklónozása. 
A projekt funkcionalitása: 
- egy görgető sáv van, ahol a felhasználó az oldal végéről is az oldal tetejére tudja navigálni magát
- van egy keresési funkció, amely automatikusan megkeresi az adott országot/várost
- van egy skála, ahol be tudjuk állitani mekkora összegben tudunk keresni a helyek között --> ez automatikusan leszűri a helyek között a keresési feltételeknek megfelelő helyet
- az úticél kiválasztásánál egy görgető lista az ami segit a hely kiválasztásában  
