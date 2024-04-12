import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../../store'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'

export function Counter() {
  const [countValue, setCountValue] = useState(5)
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div
      className=" w-full max-w-md rounded-lg border bg-card p-8 font-sans text-card-foreground shadow-sm"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-8">
        <h2 className="text-center text-3xl font-bold">Counter</h2>
        <div className="text-center text-6xl font-semibold">{count}</div>
        <div className="flex items-center justify-center space-x-4">
          <button className="button" onClick={() => dispatch(decrement())}>
            <div className="h-6 w-6"> - </div>
          </button>

          <button className="button" onClick={() => dispatch(increment())}>
            <div className="h-6 w-6"> +</div>
          </button>

          <button className="button" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
        <hr />
        <div className="flex items-center justify-center space-x-4">
          <input
            className="h-10 w-16 rounded-md border border-gray-300 text-center"
            type="number"
            value={countValue}
            onChange={e => {
              setCountValue(Number(e.target.value))
            }}
          />
          <button
            className="button"
            onClick={() => dispatch(incrementByAmount(countValue))}
          >
            Increment By Amount
          </button>
        </div>
      </div>
    </div>
  )
}
