'use client';

import type { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount
} from '@/redux/features/counter/counterSlice';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>{count}</h1>
      <button
        className="border p-2 rounded-xl"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button
        className="border p-2 rounded-xl"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
      <button
        className="border p-2 rounded-xl"
        onClick={() => dispatch(incrementByAmount(2))}
      >
        increment amount by 2
      </button>
    </main>
  );
}
