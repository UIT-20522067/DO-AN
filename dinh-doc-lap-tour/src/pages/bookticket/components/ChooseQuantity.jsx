import React, { useState } from "react";

function ChooseQuantity({ quantity, setQuantity }) {
  return (
    <div className="flex gap-0">
      <button
        onClick={() => setQuantity((prev) => prev - 1)}
        className="bg-white border border-black px-3 active:bg-slate-300 border-r-0"
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        border-r-0
        onChange={(e) => setQuantity(e.target.value)}
        className="px-4 w-14 border border-black border-r-0 text-center"
      />
      <button
        onClick={() => setQuantity((prev) => prev + 1)}
        className="bg-white border border-black px-3 active:bg-slate-300"
      >
        +
      </button>
    </div>
  );
}

export default ChooseQuantity;
