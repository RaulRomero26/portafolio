import React from 'react'
import { motion } from 'framer-motion';

import {
    PaddingContainer,
    FlexContainer,
    Container,
    BlueText
} from '../../styles/Global.styled';

import {
    NavMenuContainer,
    MenuIcon,
    MenuItem
} from '../../styles/Navbar.styled';

import { navLinks } from '../../utils/Data';

import { AiOutlineClose } from 'react-icons/ai'

import { slideInLeftVariant } from '../../utils/Variants';

export const NavMenu = ({setOpenMenu}) => {
  return (
        <NavMenuContainer
            as={motion.div}
            variants={slideInLeftVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <PaddingContainer $left="5%" $right="5%" $top="2rem">
                <FlexContainer 
                    $justify="flex-end"
                    $responsiveFlex
                >
                    <MenuIcon
                        as={motion.a}
                        whileHover={{scale:1.2}}
                        onClick={() => setOpenMenu(false)}
                    >
                        <AiOutlineClose/>
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainer>

            <PaddingContainer $top="8%">
                <FlexContainer
                    $direction="column"
                    $align="center"
                    $responsiveFlex
                >
                    {
                        navLinks.map((link) =>
                        (
                            <MenuItem
                                as={motion.a}
                                whileHover={{scale:1.2}}
                                key={link.id}
                                href={`${link.href}`}
                                onClick={() => setOpenMenu(false)}
                            >
                                {link.name}
                            </MenuItem>
                        ))
                    }
                   
                </FlexContainer>
            </PaddingContainer>
        </NavMenuContainer>
  )
}
