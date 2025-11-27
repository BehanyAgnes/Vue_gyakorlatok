A projekt elkezdéséhez szükséges parancsok: 

npm create vite@latest klonozott_weboldal --template vue 
npm install
ha van benne router: 
npm install vue-router 

projekt elinditása: npm run dev 

A Wikipedia klónolása Vue Javascript projectben. A feladatot belső style.css-sel oldottam meg, jelenleg a weboldal nem reszponziv és bizonyos funkciók nem működnek, tervezem továbbfejleszteni, animációkkal, Javascript-kóddal. 

Struktúra: 
public/  
├─ data/  
 ├─ gallery.json  
 
├─ gallery/  
 │    ├─ pic1.jpg  
 │    ├─ pic2.jpg  
 │    ├─ pic3.jpg  
src/  
 ├─ components/  
 │    ├─ Header.vue  
 │    ├─ Footer.vue  
 │    ├─ SidebarLeft.vue  
 │    ├─ SidebarRight.vue  
 │    ├─ MainContent.vue  
 │    ├─ ContentBox.vue  
 │
 ├─ pages/  
 │    ├─ Home.vue  
 │
 ├─ App.vue  
 └─ main.js  
 

