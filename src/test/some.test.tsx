import { passSomeTime } from './setup/mock-time'

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { {{ tmplr.component }} } from '../component'


test('renders on the screen.', async () => {
  render(<{{ tmplr.component }}/>)
  expect(screen.getByRole('counter').textContent).toBe('0')
  expect(screen.getByRole('incr').textContent).toBe('+')
})


test('increases the counter.', async () => {
  const user = userEvent.setup({ delay: null })
  render(<{{ tmplr.component }}/>)

  await user.click(screen.getByRole('incr'))

  passSomeTime(2000)
  expect(screen.getByRole('counter').textContent).toBe('1')
})


test('only increases when clicking slowly.', async () => {
  const user = userEvent.setup({ delay: null })
  render(<{{ tmplr.component }}/>)

  await user.click(screen.getByRole('incr'))

  passSomeTime(2000)
  expect(screen.getByRole('counter').textContent).toBe('1')

  await user.click(screen.getByRole('incr'))
  await user.click(screen.getByRole('incr'))

  passSomeTime(2000)
  expect(screen.getByRole('counter').textContent).toBe('2')

  await user.click(screen.getByRole('incr'))
  passSomeTime(500)
  await user.click(screen.getByRole('incr'))
  await user.click(screen.getByRole('incr'))
  passSomeTime(900)
  await user.click(screen.getByRole('incr'))

  expect(screen.getByRole('counter').textContent).toBe('2')

  passSomeTime(2000)
  expect(screen.getByRole('counter').textContent).toBe('3')
})
