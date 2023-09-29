import React from 'react'
import {motion} from 'framer-motion';

import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button
} from '../../styles/Global.styled';

import {
  TechStackCard,
  TechStackContainer,
  ProjectImage,
  ProjectImageContainer
} from '../../styles/MyProject.styled';

import {FaGithub} from 'react-icons/fa';
import { fadeInLeftVariant,fadeInRightVariant } from '../../utils/Variants';

export const Project = ({data}) => {
  return (
    <FlexContainer 
      $direction = {data.reverse ? 'row-reverse': false }
      $fullWidthChild
    >
      <motion.div
        variants={ data.reverse ? fadeInRightVariant:fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer $align="center" $gap="1rem">
          <Heading as="h3" size="h3" $bottom="1rem">
            {data.project_name}
          </Heading>

          <IconContainer color="blue" size="2rem">
            <FaGithub/>
          </IconContainer>
        </FlexContainer>

        <PaddingContainer $top="1rem">
          <TechStackContainer $gap="1.5rem">
            {
              data.tech_stack.map((stack) => ( <TechStackCard key={stack}>{stack}</TechStackCard>))
            }
           
          </TechStackContainer>
        </PaddingContainer>

        <ParaText $top="1.5rem" $bottom="2rem">
          {data.project_desc}
        </ParaText>
        
        <Button href={data.project_url} target='_blank'>Visit Website</Button>
      </motion.div>
      
      <ProjectImageContainer 
        as={motion.div}
        variants={ data.reverse ? fadeInLeftVariant:fadeInRightVariant }
        initial="hidden"
        whileInView="visible"
        $justify={data.reverse ? "flex-start":"flex-end"}
      >
          <ProjectImage src={data.project_img} alt={data.project_name}/>
      </ProjectImageContainer>
    </FlexContainer>
  )
}
