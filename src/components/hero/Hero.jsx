import React from 'react';
import { useSelector } from 'react-redux';
import './Hero.css';

const Hero = () => {
    let data = useSelector((state) => state.counter.value)
  return (
    <div>
        <h2>HERO _ { data }</h2>
    </div>
  )
}

export default Hero