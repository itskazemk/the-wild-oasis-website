"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="btn" onClick={() => setCount((c) => c + 1)}>
        {count}
      </button>
      <button className="btn">Button</button>
    </div>
  );
}
