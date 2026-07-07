import { useState } from 'react'
import './App.css'

// ── メインコンポーネント ──────────────────────────────────────
function App() {
  // useState：Reactの「状態管理」フック
  // inputText  … 入力欄の文字
  // todos      … ToDoの配列（リスト）
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactの仕組みを理解する', done: false },
    { id: 2, text: '最初のコンポーネントを作る', done: true },
  ])

  // ── ToDo を追加する ──────────────────────────────────────
  function handleAdd() {
  }

  // ── 完了／未完了を切り替える ─────────────────────────────
  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  // ── ToDo を削除する ──────────────────────────────────────
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // ── Enterキーで追加できるようにする ─────────────────────
  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAdd()
  }

  // ── 残りのタスク数を計算する ─────────────────────────────
  const remaining = todos.filter((todo) => !todo.done).length

  // ── 画面に表示する JSX ──────────────────────────────────
  return (
    <div className="container">
      <h1 className="title">ToDo アプリ</h1>

      {/* 入力エリア */}
      <div className="input-area">
        <input
          type="text"
          className="input"
          placeholder="新しいタスクを入力..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="btn-add" onClick={handleAdd}>
          追加
        </button>
      </div>

      {/* タスクの残り件数 */}
      <p className="remaining">残り {remaining} 件</p>

      {/* ToDoリスト */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.done ? 'done' : ''}`}>
            {/* チェックボックス */}
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
              className="checkbox"
            />
            {/* タスクのテキスト */}
            <span className="todo-text">{todo.text}</span>
            {/* 削除ボタン */}
            <button
              className="btn-delete"
              onClick={() => handleDelete(todo.id)}
            >
              削除
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="empty">タスクがありません。追加してみましょう！</p>
      )}
    </div>
  )
}

export default App
