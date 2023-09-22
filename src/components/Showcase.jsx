//import React from 'react'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    BlueText,
    ParaText,
    IconContainer,
    ShowcaseParticleContainer
} from '../styles/Global.styled'

import { BsLinkedin, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';

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
              as="h1" 
              size="h1" 
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

          <FlexContainer>
            <ShowcaseParticleContainer>

            </ShowcaseParticleContainer>
          </FlexContainer>
        </FlexContainer>
    </PaddingContainer>
  )
}
