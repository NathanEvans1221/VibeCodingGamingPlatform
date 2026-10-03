<template>
  <header class="header-nav">
    <div class="logo">
      <h1>Online</h1>
    </div>
    <nav class="main-menu" aria-label="主要導覽">
      <ul>
        <li aria-current="page">遊戲介紹</li>
        <li>下載專區</li>
        <li>儲值中心</li>
        <li>客服中心</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Header logic
</script>

<style scoped>
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #1a1a1a;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #ffd700; /* Gold */
}

.main-menu ul {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.main-menu li {
  white-space: nowrap;
  color: #ddd;
  font-weight: 500;
  transition: color 0.3s;
}

.main-menu li[aria-current="page"] {
  color: #ffd700;
}

@media (max-width: 767px) {
  .header-nav {
    justify-content: flex-start;
    gap: 16px;
    overflow-x: auto;
  }

  .main-menu {
    overflow-x: auto;
  }

  .main-menu ul {
    gap: 12px;
  }
}
</style>
