import React from 'react'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    BlueText,
    ParaText,
    IconContainer,
    Button
} from '../styles/Global.styled';

import {
    ContactForm,
    FormLabel,
    FormInput
} from '../styles/Footer.styled';

export const Footer = () => {
  return (
    <PaddingContainer
        id="Contact"
        $top="5%"
        $bottom="10%"
    >
        <Heading 
            as="h4" 
            size="h4"
            $align="center"
        >
            MY CONTACT
        </Heading>

        <Heading
            as="h2"
            size="h2"
            $align="center"
            $top="0.5rem"
        >
            Contact <BlueText>Me Here</BlueText>
        </Heading>

        <PaddingContainer $top="3rem">
            <FlexContainer $justify="center">
                <ContactForm>
                    <PaddingContainer $bottom="2rem">
                        <FormLabel>Name:</FormLabel>
                        <FormInput
                            type="text"
                            placeholder="Enter your name"
                        />
                    </PaddingContainer>

                    <PaddingContainer $bottom="2rem">
                        <FormLabel>Email:</FormLabel>
                        <FormInput
                            type="email"
                            placeholder="Enter your email"
                        />
                    </PaddingContainer>

                    <PaddingContainer $bottom="2rem">
                        <FormLabel>Message:</FormLabel>
                        <FormInput
                            as="textarea"
                            placeholder="Enter your message"
                        />
                    </PaddingContainer>

                    <FlexContainer $justify="center">
                        <Button>Send Mesage</Button>
                    </FlexContainer>
                </ContactForm>
            </FlexContainer>
        </PaddingContainer>

    </PaddingContainer>
  )
}