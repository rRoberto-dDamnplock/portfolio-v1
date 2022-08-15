import React, {useEffect, useState} from "react";

import python from '../../../assets/neural.png';
import algebra from '../../../assets/mathematic.png';
import statistics from '../../../assets/analytics.png';
import ai from '../../../assets/artificial-intelligence.png';
import aws from '../../../assets/cloud-data.png';
import web3 from '../../../assets/network.png';
import classes from "./Carousel.module.css";

function CarouselComp() {
const data = [
  {
  topic: 'Problem solving with algorithms and data structure using python.',
  image: python,
  rating: '8/10'
},
{
  topic: 'Cloud Computing/AWS',
  image: aws,
  rating: '8/10'
},
{
  topic: 'Artificial Inteligence a Modern Approach',
  image: ai,
  rating: 'just reading 😅'
},
{
  topic: 'Decentralized Tech',
  image: web3,
  rating: '7/10'
},

{
  topic: 'Linear Algebra',
  image: algebra,
  rating: '6/10'
},
{
  topic: 'Probability and Statistics',
  image: statistics,
  rating: '5/10'
},
  
]
const [currentIndex, setCurrentIndex] = useState(0)
const carouseInfiniteScroll = () => {
  if(currentIndex=== data.length-1){
    return setCurrentIndex(0)
  }
  return setCurrentIndex(currentIndex + 1)
}

useEffect(() => {
  const interval = setInterval(() => {
    carouseInfiniteScroll()}, 3000)
    return () => clearInterval(interval)
  }) 

  const prevHandler = () => {
    if(currentIndex=== data.length-1){
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex-1)
  }

  const  nextHandler = () => {
    if(currentIndex=== data.length-1){
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex+1)
  }





  return (
    <>
    <h1>Currently Learning/Reading...</h1>
    <div className={classes["carousel-container"]}>
      {data.map((item, index) => {
        return <div 
        className={classes['carousel-item']} 
        style={{transform: `translate(-${currentIndex * 100}%)`}}
         key={index}>
          <h2 className={classes.topic}>{item.topic}</h2>
          <div className={classes.buttonCarousel}>
          <button onClick={prevHandler}><strong>Prev</strong></button>
          <button onClick={nextHandler}><strong>Next</strong></button>
         </div>
          <img alt={item.topic} className={classes['carousel-image']} src={item.image}/>
          <h2>Proficiency: {item.rating}</h2>
         
         </div>
         
      })}
    </div>
    </>
  );
}

export default CarouselComp;
