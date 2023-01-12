import React from 'react'
import Image from "next/image"
import ProImg from '../public/adria.jpg'
import { motion } from "framer-motion"
import typeOne from '../public/react.png'
import typeTwo from '../public/js.png'
import typeThree from '../public/firebase.png'
import typeFour from '../public/nodejs.png'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-l items-center'>
        <motion.div
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
        
        >
        <Image 
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        alt='img'
        src={ProImg}
        />
        </motion.div>
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
          <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
          <div className='flex space-x-2my-2'>
            <Image className='h-10 w-10 rounded-full' src={typeOne} alt='react logo' />
            <Image className='h-10 w-10 rounded-full' src={typeTwo} alt='javascript logo' />
            <Image className='h-10 w-10 rounded-full' src={typeThree} alt='firebase logo' />
            <Image className='h-10 w-10 rounded-full' src={typeFour} alt='nodejs logo' />


          </div>
            <p className='uppercase py-5 text-gray-300'>Started work... -Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
              <li>Summary Points</li>
              <li>Summary Points</li>
              <li>Summary Points</li>
              <li>Summary Points</li>
              <li>Summary Points</li>
            </ul>
          
        </div>
        
    </article>
  )
}

export default ExperienceCard