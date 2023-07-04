'use client';

import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>증가</button>
    </>
  );
}
