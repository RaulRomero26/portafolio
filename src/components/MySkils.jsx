
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText
} from '../styles/Global.styled/';

import {
  SkillCardContainer,
  SkillsCard
} from '../styles/MySkils.styled';

import { Skills } from '../utils/Data'; 

export const MySkils = () => {
return (
  <PaddingContainer
      id="skils"
      $top="10%"
      $bottom="10%"   
  >
      <FlexContainer $fullWidthChild>
        <SkillCardContainer>
          {Skills.map((skill) => {
            return (
            <SkillsCard key={skill.id} >
              <IconContainer size="5rem" color="blue">
                {skill.icon}
              </IconContainer>
              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
            </SkillsCard >
            )
          })}
        </SkillCardContainer>
        <div>
          <Heading as="h4" size="h4">
            My SKILLS
          </Heading>

          <Heading as="h2" size="h2" $top="0.5rem">
            What <BlueText>I can do</BlueText>
          </Heading>

          <ParaText $top="2rem" $bottom="1.5rem">
            As a Developer, I have a wide range of experience in
            front-end and back-end development. I am proficient in Javascript,
            React, Node Js, CSS and some Pyhon and Angular. My strong experience in
            building Web Applications using React and Node Js has allowed me to create
            a ussesfull applications.
          </ParaText>

          <ParaText>
            I have experience in using React for building scalable
            and maintainable applications. This allowed me to adapt me
            to the needs of a buisiness.
          </ParaText>
        </div>

      </FlexContainer>
  </PaddingContainer>
)
}