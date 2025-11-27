<template>
  <aside class="sidebar">
    <div class="box">
      <h3>Megjelenés</h3>

      <!-- Áthelyezés gomb -->
      <button class="move-button">Áthelyezés az oldalsávba</button>

      <!-- Betűméret -->
      <div class="section">
        <label>Betűméret</label>
        <div>
          <label><input type="radio" name="fontSize" value="small" /> Kicsi</label>
          <label><input type="radio" name="fontSize" value="normal" checked /> Normál</label>
          <label><input type="radio" name="fontSize" value="large" /> Nagy</label>
        </div>
      </div>

      <!-- Szélesség -->
      <div class="section">
        <label>Szélesség</label>
        <div>
          <label><input type="radio" name="width" value="normal" checked /> Szokásos</label>
          <label><input type="radio" name="width" value="wide" /> Széles</label>
        </div>
      </div>

      <!-- Színek -->
      <div class="section">
        <label>Színek (béta)</label>
        <div>
          <label><input type="radio" name="theme" value="auto" /> Automatikus</label>
          <label><input type="radio" name="theme" value="light" checked /> Világos</label>
          <label><input type="radio" name="theme" value="dark" /> Sötét</label>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
// Itt később kezelheted a beállítások változását
</script>

<style scoped>
.sidebar {
  width: 250px;
  padding: 1rem;
}

.box {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
}

.box h3 {
  margin-bottom: 0.5rem;
}

.move-button {
  display: block;
  margin-bottom: 1rem;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.section {
  margin-bottom: 1rem;
}

.section label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.section div label {
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  cursor: pointer;
}

.section div input[type="radio"] {
  margin-right: 0.5rem;
}
</style>
