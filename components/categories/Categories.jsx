import React, { useEffect } from 'react'

const Categories = () => {
    const categories = ['Wireless', 'Gaming', 'Earphones', "Speakers", "Watches"]
    useEffect(() => {
        const categories = document.querySelectorAll('.categories');

        categories[0].classList.add('active')
    },[])
  return (
    <div className=" my-16 md:text-lg">
        <ul className=" h-24 flex justify-around p-4">
            {categories.map((item, index) => <li className={index % 2 === 0 ? 'categories font-bold self-start md:self-center' : 'categories font-bold self-end md:self-center'} key={index}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Categories