import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import LoginForm from '../LoginForm'

describe('LoginForm', () => {
  it('renders the form', () => {
    render(<LoginForm onSubmit={vi.fn()} />)
    expect(screen.getByTestId('login-form')).toBeDefined()
  })

  it('shows error when fields are empty', () => {
    render(<LoginForm onSubmit={vi.fn()} />)
    fireEvent.click(screen.getByText('Login'))
    expect(screen.getByTestId('error').textContent).toBe('All fields required')
  })

  it('calls onSubmit with credentials', () => {
    const mockSubmit = vi.fn()
    render(<LoginForm onSubmit={mockSubmit} />)
    fireEvent.change(screen.getByTestId('username'), { target: { value: 'admin' } })
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'secret' } })
    fireEvent.click(screen.getByText('Login'))
    expect(mockSubmit).toHaveBeenCalledWith({ username: 'admin', password: 'secret' })
  })
})