<template>
  <footer class="footer-info">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Online. All Rights Reserved.</p>
      <p class="links">服務條款 · 隱私權政策 · 聯絡我們</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-info {
  background-color: #111;
  color: #666;
  padding: 20px;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid #222;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.links {
  color: #888;
}
</style>
