# ToDo アプリ

このアプリは、React を使ったシンプルな ToDo アプリです。

## GitHub Pages へのデプロイ
このアプリは、GitHub Actions を使って自動的に GitHub Pages にデプロイされます。
そのため、vite.config.js の `base` オプションを正しく設定する必要があります。

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/todo-app/' // 👈 GitHub Pages のリポジトリ名に合わせる
})
```