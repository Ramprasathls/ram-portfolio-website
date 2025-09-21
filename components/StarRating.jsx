
"use client";
import { useState } from "react";

export default function StarRating({ value=0, onChange }) {
  const [hover, setHover] = useState(0);
  const stars = [1,2,3,4,5];
  return (
    <div className="flex items-center gap-1">
      {stars.map((s) => (
        <button
          key={s}
          type="button"
          className={(hover >= s || value >= s) ? "text-yellow-300" : "text-gray-400"}
          onMouseEnter={() => setHover(s)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange?.(s)}
          aria-label={`Rate ${s} star`}
        >
          ★
        </button>
      ))}
      <span className="ml-2 text-sm text-gray-300">{value}/5</span>
    </div>
  );
}
