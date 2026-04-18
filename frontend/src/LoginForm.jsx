import { useState } from 'react'

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !password) {
      setError('All fields required')
      return
    }
    onSubmit({ username, password })
  }

  return (
    <form onSubmit={handleSubmit} data-testid="login-form">
      <input data-testid="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input data-testid="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      {error && <p data-testid="error">{error}</p>}
      <button type="submit">Login</button>
    </form>
  )
}