<template>
  <aside class="side-menu">
    <ul>
      <li aria-current="page">遊戲總覽</li>
      <li>最新活動</li>
      <li>系統公告</li>
      <li>遊戲教學</li>
      <li>VIP專區</li>
    </ul>
  </aside>
</template>

<script setup>
// Side menu logic
</script>

<style scoped>
.side-menu {
  width: 200px;
  background-color: #222;
  padding: 20px 0;
  height: 100%;
  flex-shrink: 0;
}

.side-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.side-menu li {
  border-bottom: 1px solid #333;
}

.side-menu li {
  display: block;
  padding: 15px 20px;
  color: #aaa;
  transition: background 0.3s, color 0.3s;
}

.side-menu li[aria-current="page"] {
  background-color: #333;
  color: #ffd700;
  border-left: 4px solid #ffd700;
}
</style>
