import React,{useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    BlueText,
    Button
} from '../styles/Global.styled';

import {
    ContactForm,
    FormLabel,
    FormInput
} from '../styles/Footer.styled';
import { fadeInBottomVariant } from '../utils/Variants';

export const Footer = () => {

    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ae43rm', 'template_oqt365w', form.current, 'AHNJqNbJ1eQIDc4kv')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            Swal.fire({
                title:'Message Sent',
                html:'The message has been sent successfully!',
                icon:'success',
                timer: 4000
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                title:'An error has occurred',
                html:'The message could not be delivered',
                icon:'error',
                timer: 4000
            })
        });
    };
    
  return (
    <PaddingContainer
        id="Contact"
        $top="5%"
        $bottom="10%"
    >
        <Heading 
            as={motion.h4}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible" 
            size="h4"
            $align="center"
        >
            MY CONTACT
        </Heading>

        <Heading
            as={motion.h2}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible" 
            size="h2"
            $align="center"
            $top="0.5rem"
        >
            Contact <BlueText>Me Here</BlueText>
        </Heading>

        <PaddingContainer $top="3rem">
            <FlexContainer $justify="center">
                <ContactForm
                    as={motion.form}
                    ref={form}
                    onSubmit={sendEmail}
                    variants={fadeInBottomVariant}
                    initial="hidden"
                    whileInView="visible" 
                >
                    <PaddingContainer $bottom="2rem">
                        <FormLabel>Name:</FormLabel>
                        <FormInput
                            type="text"
                            name="user_name"
                            placeholder="Enter your name"
                        />
                    </PaddingContainer>

                    <PaddingContainer $bottom="2rem">
                        <FormLabel>Email:</FormLabel>
                        <FormInput
                            type="email"
                            name="user_email"
                            placeholder="Enter your email"
                        />
                    </PaddingContainer>

                    <PaddingContainer $bottom="2rem">
                        <FormLabel>Message:</FormLabel>
                        <FormInput
                            as="textarea"
                            name='message'
                            placeholder="Enter your message"
                        />
                    </PaddingContainer>

                    <FlexContainer $justify="center" $responsiveFlex>
                        <Button as="button"  type="submit" >Send Mesage</Button>
                    </FlexContainer>
                </ContactForm>
            </FlexContainer>
        </PaddingContainer>

    </PaddingContainer>
  )
}
