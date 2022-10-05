import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'
import Video from '../../videos/video.mp4'
export const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

        </HeroBg>
        <HeroContent>
            <HeroH1>Financial Data Made Easy </HeroH1>
            <HeroP>
                Explore our website to unlock your future in the world of finance!
            </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}
