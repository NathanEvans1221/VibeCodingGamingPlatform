# 專案規劃書 (Planning.md)

## 1. 專案概述
本專案為一個 Vue 前端 DEMO，旨在模仿《星城Online》遊戲總覽頁面的核心功能與視覺結構。
目標是建立一個具有響應式設計、組件化結構的前端應用，並展示動態載入遊戲列表的功能。

## 2. 技術棧
- **核心框架**: Vue 3 (使用 Vite 建構)
- **語言**: Vue Single-File Components 使用 JavaScript；入口使用 TypeScript。
- **樣式**: CSS (Vanilla 或 Scoped CSS)
- **路由**: Vue Router (視需要，目前單頁結構可能不需要複雜路由，但可預留)

## 3. 檔案結構分析
根據 `PROMPT.mt` 的要求，專案結構如下：

```plaintext
src/
|-- components/
|   |-- HeaderNav.vue        # 頂部導航/Logo、主選單
|   |-- SideMenu.vue         # 側邊功能選單
|   |-- CategoryTabs.vue     # 遊戲分類標籤
|   |-- GameList.vue         # 遊戲清單容器
|   |-- GameCard.vue         # 單一遊戲卡片
|   |-- FooterInfo.vue       # 頁腳資訊
|-- App.vue                  # 主入口
|-- main.ts                  # 程式入口
|-- assets/                  # 靜態資源 (圖片、樣式)
```

## 4. 組件詳細功能

### 4.1 App.vue
- 佈局容器 (Layout Container)。
- 組合 Header, SideMenu, Main Content (CategoryTabs + GameList), Footer。

### 4.2 HeaderNav.vue
- 展示 Logo。
- 頂部導航連結 (遊戲介紹, 下載, 儲值, 客服)。
- 目前不提供登入/註冊互動。

### 4.3 SideMenu.vue
- 展示快速入口文字 (遊戲教學, 活動區, 公告)；目前沒有對應頁面或導覽路由。
- 桌面版顯示側欄，移動版隱藏。

### 4.4 CategoryTabs.vue
- 顯示分類：全部、國際區、SLOT、棋牌、捕魚、特殊、彩金。
- 點擊切換 `activeCategory` 狀態，觸發 `GameList` 更新。

### 4.5 GameList.vue
- 接收 `activeCategory` prop。
- 遍歷遊戲數據，渲染 `GameCard`。
- 處理 RWD 網格佈局 (Grid Layout)。

### 4.6 GameCard.vue
- 接收單個遊戲數據 (Object)。
- 顯示：Icon 與標題；遠端圖片載入失敗時顯示 `public/placeholder.svg`。
- 懸停效果 (Hover Effect)。

### 4.7 FooterInfo.vue
- 靜態資訊展示。

## 5. 數據來源
- 將從 `https://www.xin-stars.com/GameIntro/GAME_List/` 抓取遊戲名稱與 Icon 圖片。
- 數據將存儲於 `src/data/games.json` 中，模擬 API 回傳。

## 6. 執行步驟
1.  **數據採集**: 使用工具爬取目標網站的遊戲數據。
2.  **專案初始化**: 使用 Vite 建立 Vue 專案。
3.  **組件開發**: 依序開發各個 Vue 組件。
4.  **樣式調整**: 確保視覺效果接近原站或具備現代感。
5.  **整合測試**: 確認分類切換與列表渲染正常。
