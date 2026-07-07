# ToDo アプリ

このアプリは、React を使ったシンプルな ToDo アプリです。

## GitHub Pages デプロイ
https://hands-nakamatsu.github.io/todo-app/

このアプリは、GitHub Actions を使って自動的に GitHub Pages にデプロイされます。
GitHub Pages で正常に動作させるためには、vite.config.js の `base` オプションを GitHub Pages のリポジトリ名に合わせてください。

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/todo-app/' // 👈 GitHub Pages のリポジトリ名に合わせる
})
```
