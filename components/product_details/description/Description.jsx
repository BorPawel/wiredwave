import React, { useState } from "react";
export function Description({ longDesc }) {
  const [isToggled, setIsToggled] = useState(false);

  const toggleDescription = () => {
    setIsToggled(prev => !prev)
    const desc = document.querySelector('.description');
    if(!isToggled){
      desc.style.maxHeight = desc.scrollHeight + 'px'
    }else{
      desc.style.maxHeight = '0'
    }
  }
  return (
    <div className="min-h-[500px] w-full lg:w-3/4 p-2">
      <button onClick={toggleDescription}>Description \/</button>
      <p className="description text-sm max-h-0 overflow-hidden duration-200">{longDesc}</p>
      <div>asdasdasd</div>
    </div>
  );
}
