import React, { useState, useEffect } from 'react'
import { useDebounce, useToggle } from 'react-use'

import styles from './index.module.css'


export const SlowCounter = () => {
  const [raw, setRaw] = useState(0)
  const [counter, set] = useState(0)
  const [tooFast, flag] = useToggle(false)

  useDebounce(() => {
    if (counter < raw) {
      set(counter + 1)
      setRaw(counter + 1)
      flag(false)
    }
  }, 1000, [raw])

  useEffect(() => {
    if (counter + 1 < raw) {
      flag(true)
    }
  }, [counter, raw])

  return (
    <>
      <div className={styles.holder}>
        <div className={styles.counter} role='counter'>{counter}</div>
        <button onClick={() => setRaw(raw + 1)} role='incr'>+</button>
        <div className={`${styles.state} ${tooFast ? styles.visible : styles.hidden}`}>
          Slow down turbo ...
        </div>
      </div>
    </>
  )
}
