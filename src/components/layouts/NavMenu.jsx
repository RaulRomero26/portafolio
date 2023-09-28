import React from 'react'

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

export const NavMenu = ({setOpenMenu}) => {
  return (
        <NavMenuContainer>
            <PaddingContainer $left="5%" $right="5%" $top="2rem">
                <FlexContainer 
                    $justify="flex-end"
                    $responsiveFlex
                >
                    <MenuIcon
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
