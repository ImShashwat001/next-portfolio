import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import ProImg from '../public/adria.jpg'

type Props = {
  directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
      className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image 
          
          src={ProImg}
          alt='skill image'
        />
      </motion.div>
        <div>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>100%</p>
          </div>
        </div>
    </div>
  )
}

export default Skill