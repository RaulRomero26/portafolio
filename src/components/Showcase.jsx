//import React from 'react'

import { motion } from 'framer-motion';

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

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

export const Showcase = () => {
  return (
    <PaddingContainer
        id="Home"
        $left="3%"
        $right="10%"
        $top="18%"
        $bottom="10%"
        $responsiveLeft="1rem"
        $responsiveRight="1rem"
        $responsiveTop="8rem"
    >
        <FlexContainer $align="center" $fullWidthChild >
          <motion.div
            variants={ fadeInLeftVariant }
            initial="hidden"
            whileInView="visible"
          >
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

            <FlexContainer $gap="20px" $responsiveFlex>
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


          </motion.div>

          <FlexContainer 
            as={motion.div}
              variants={ fadeInRightVariant }
              initial="hidden"
              whileInView="visible"
            $justify="flex-end"
          >
            <ShowcaseParticleContainer>
              <ShowcaseImageCard>
                <img src={ShowcaseImg} width="300px"alt="showcase" />
              </ShowcaseImageCard>
                <Particle
                  as={motion.img}
                  animate={{
                    x:[0,100,0],
                    rotate: 360,
                    scale:[1,0.5,1]
                  }}
                  transition={{
                    duration:20,
                    repeat:Infinity
                  }}
                  src={BackgroundImg}
                  alt="particle"
                  $top="-80px"
                  $left="20px"
                  $rotate="60deg"
                />
                <Particle
                  as={motion.img}
                  animate={{
                    y:[0,100,0],
                    rotate: 360,
                    scale:[1,0.8,1]
                  }}
                  transition={{
                    duration:18,
                    repeat:Infinity
                  }}
                  src={BackgroundImg}
                  alt="particle"
                  $top="50px"
                  $right="-70px"
                  $rotate="0deg"
                />
                <Particle
                  as={motion.img}
                  animate={{
                    y:[0,-100,0],
                    rotate: 360,
                    scale:[1,0.9,1]
                  }}
                  transition={{
                    duration:15,
                    repeat:Infinity
                  }}
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
