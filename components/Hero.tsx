import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [ text, count ] = useTypewriter({
        words: [
            "Hi, The Name's Shashwat",
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div>
        <BackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7ABBA' />
        </h1>
        
    
    </div>
  )
}