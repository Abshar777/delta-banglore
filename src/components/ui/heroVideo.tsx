import React from 'react'

const HeroVideo = () => {
  return (
    <video
            loop
            muted
            autoPlay
            playsInline
            preload="none"
            poster="/hero.png"
          >
            <source src={"/assets/vids/heroBg.mp4"} type="video/webm" />
          </video>
  )
}

export default HeroVideo
