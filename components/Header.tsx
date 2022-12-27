import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function({}: Props) {
  return (
    <header>
 
    <div className='flex flex-row items-center'>
    <SocialIcon url="https://www.youtube.com/sonnysangha"
    fgColor='gray'
    bgColor='transparent'
    />
    <SocialIcon url="https://www.youtube.com/sonnysangha"
    fgColor='gray'
    bgColor='transparent'
    />
    <SocialIcon url="https://www.youtube.com/sonnysangha"
    fgColor='gray'
    bgColor='transparent'
    />
    </div>
    <div>
      <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="gray"
        bgColor="transparent"
      />
      <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
    </div>

    </header>
  )
}