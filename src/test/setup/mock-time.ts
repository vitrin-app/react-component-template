import { act } from '@testing-library/react'


beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  act(() => { jest.runOnlyPendingTimers() })
  jest.useRealTimers()
})


export function passSomeTime(ms = 40) {
  act(() => { jest.advanceTimersByTime(ms) })
}
