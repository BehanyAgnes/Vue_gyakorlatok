A Wikipedia klónolása Bue Javascript projectben. A feladatot belső style.css-sel oldottam meg. 

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

projekt elkezdése: 

npm create vite@latest klonozott_weboldal --template vue 

Futtatása: 
npm run dev 
