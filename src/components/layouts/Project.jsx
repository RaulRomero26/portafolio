import React from 'react'

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
import Project1 from '../../assets/Project1.png';
import Project2 from '../../assets/Project2.png';

export const Project = ({data}) => {
  return (
    <FlexContainer $fullWidthChild>
      <div>
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
      </div>
      
      <ProjectImageContainer $justify="flex-end">
          <ProjectImage src={data.project_img} alt={data.project_name}/>
      </ProjectImageContainer>
    </FlexContainer>
  )
}
