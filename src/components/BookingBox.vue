<template>

<div class="booking-panel">
  <div class="field"><input type="text" name="" id="" placeholder="Indulás" class="indulasi"></div>
  <div class="field"><input type="text" name="" id="" class="indulasi" placeholder="Cél"></div>
  <div class="field">
    <label>Indulás</label>
    <input type="date" name="" id="" class="indulasi">
  </div>
  <div class="field">
    <label>Érkezés</label>
  <input type="date" name="" id="" class="indulasi">
  </div>
  
  <div class="field">
    <label>Utasok száma</label>
   <input type="number" class="indulasi">
  </div>

  <button class="booking-btn">Foglalás</button>
</div>
</template>

<style scoped>

.booking-panel {
  display: flex;
  background: #f2f2f2;
  border-radius: 20px;
  padding: 15px;
  gap: 10px;
  align-items: center;
  border: 1px solid #ddd;
}

.field {
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  padding: 12px 18px;
  min-width: 140px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.field label {
  font-size: 12px;
  font-weight: bold;
  color: #06038D;
}

.indulasi
{
    border: none;
}
.booking-btn {
  background: #c30083;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

</style>
