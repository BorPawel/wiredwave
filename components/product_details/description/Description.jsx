import React from "react";
export function Description({
  longDesc
}) {
  return <div className="min-h-[500px]">
        <p className="text-sm">{longDesc}</p>
      </div>;
}
  