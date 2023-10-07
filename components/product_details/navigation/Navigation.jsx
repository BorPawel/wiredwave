import React from "react";
export function Navigation() {
  const mainDescClass = "m-2 hover:text-blue cursor-pointer";
  return (
    <div className="w-full border-y-2 border-grey flex items-center justify-center gap-12">
      <p className={mainDescClass}>Description</p>
      <p className={mainDescClass}>Spec</p>
      <p className={mainDescClass}>Reviews</p>
    </div>
  );
}
