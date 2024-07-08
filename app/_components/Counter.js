"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => setCount((c) => c + 1)}
      >
        {count}
      </button>
      <button className="btn btn-secondary">Button</button>
    </div>
  );
}
