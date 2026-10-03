# Vue 遊戲目錄 Demo

本 Demo 使用 Vue 3 與 Vite 呈現遊戲分類與本地遊戲清單。遊戲名稱和遠端圖示網址存放在 `src/data/games.json`；分類篩選在瀏覽器本地執行。

## 開發環境

需要 Node.js 22（版本見根目錄 `.nvmrc`）。

```bash
npm install
npm run dev
```

## 專案結構

- `src/components`: 頁首、側欄、分類、卡片、清單與頁尾元件。
- `src/data/games.json`: 遊戲名稱、分類與圖示網址。
- `public/placeholder.svg`: 遠端圖示載入失敗時的本地備援圖。

## 更新圖示

在此資料夾執行 `npm run fetch-icons`，腳本會從目標遊戲列表頁擷取圖示網址並更新 JSON。HTTP 錯誤或找不到任何可用項目時會以錯誤結束，不會覆寫資料檔；部分遊戲未匹配時會保留原網址並列出結果。
