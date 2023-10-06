import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="w-full p-12 mt-12 flex justify-center items-center gap-2 border-t-[1px] border-grey">
        <AiOutlineCopyrightCircle/>
        <p> 2023 WiredWave All Rights Reserved</p>
    </footer>
  )
}

export default Footer