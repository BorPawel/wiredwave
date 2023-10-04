import React, { useEffect } from "react";

const Categories = () => {
  const categoriesArray = [
    "Wireless",
    "Gaming",
    "Earphones",
    "Speakers",
    "Watches",
  ];
  const liClass = "categories font-bold md:self-center cursor-pointer" ;

  const handleClick = (id) => {
    const categories = document.querySelectorAll(".categories");
    categories.forEach((item) => {
      item.classList.remove("active");
    });

    categories[id].classList.add("active");
  };

  useEffect(() => {
    const categories = document.querySelectorAll(".categories");
    categories[0].classList.add("active");
  }, []);
  return (
    <div className=" my-16 md:text-lg">
      <ul className=" h-24 flex justify-around p-4">
        {categoriesArray.map((item, index) => (
          <li
            className={
              index % 2 === 0 ? `${liClass} self-start` : `${liClass} self-end`
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
