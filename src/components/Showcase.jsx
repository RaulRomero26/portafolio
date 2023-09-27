//import React from 'react'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    BlueText,
    ParaText,
    IconContainer
} from '../styles/Global.styled';

import {
  ShowcaseImageCard,
  ShowcaseParticleContainer,
  Particle
} from '../styles/Showcase.styled';

import { BsLinkedin, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';

import ShowcaseImg from '../assets/me.png';
import BackgroundImg from '../assets/particle.png';

export const Showcase = () => {
  return (
    <PaddingContainer
        id="Home"
        $left="3%"
        $right="10%"
        $top="15%"
        $bottom="10%"
    >
        <FlexContainer $align="center" $fullWidthChild>
          <div>
            <Heading as="h4" size="h4">Hello</Heading>
            <Heading 
              as="h2" 
              size="h2" 
              $top="0.5rem"
              $bottom="1rem"
            >
              I&apos;m <BlueText>Raul Romero</BlueText>
            </Heading>
            <Heading 
              as="h3" 
              size="h3" 
              $top="0.5rem"
              $bottom="1rem"
            >
              I&apos;m a <BlueText>FullStack Developer</BlueText>
            </Heading>

            <ParaText as="p" $top="2rem" $bottom="4rem">
              Hello, my name is Raul Romero and I&apos;m a full-stack
              developer (MERN) with 2 years of experience in creating
              and maintaining websites and web applications.
            </ParaText>

            <FlexContainer $gap="20px">
                <IconContainer color="blue" size="1.5rem">
                  <BsLinkedin/>
                </IconContainer>

                <IconContainer color="blue" size="1.5rem">
                  <BsTwitter/>
                </IconContainer>

                <IconContainer color="blue" size="1.5rem">
                  <BsYoutube/>
                </IconContainer>

                <IconContainer color="blue" size="1.5rem">
                  <BsInstagram/>
                </IconContainer> 
            </FlexContainer>


          </div>

          <FlexContainer $justify="flex-end">
            <ShowcaseParticleContainer>
              <ShowcaseImageCard>
                <img src={ShowcaseImg} width="300px"alt="showcase" />
              </ShowcaseImageCard>
                <Particle
                  src={BackgroundImg}
                  alt="particle"
                  $top="-80px"
                  $left="20px"
                  $rotate="60deg"
                />
                <Particle
                  src={BackgroundImg}
                  alt="particle"
                  $top="50px"
                  $right="-70px"
                  $rotate="0deg"
                />
                <Particle
                  src={BackgroundImg}
                  alt="particle"
                  $bottom="10px"
                  $left="-70px"
                  $rotate="50deg"
                />
            </ShowcaseParticleContainer>
          </FlexContainer>

        </FlexContainer>
    </PaddingContainer>
  )
}
