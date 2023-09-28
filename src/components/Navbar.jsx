import React, { useState, useEffect } from 'react'

import {
    PaddingContainer,
    FlexContainer,
    Container,
    BlueText
} from '../styles/Global.styled';

import {
    NavbarContainer,
    Logo,
    MenuIcon
} from '../styles/Navbar.styled';

import { GiHamburgerMenu } from 'react-icons/gi'
import { theme } from '../utils/Theme';
import { NavMenu } from './layouts/NavMenu';

export const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false);
    const [sticky,setSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
        }
        window.addEventListener('scroll',onScroll)
      return () => window.removeEventListener('scroll',onScroll)
    }, [])
    

  return (
    <NavbarContainer $bgColor={ sticky ? theme.colors.primary : 'transparent'}>
        <PaddingContainer
            $top="1.2rem"
            $bottom="1.2rem"
            $responsiveLeft="1rem"
            $responsiveRight="1rem"
            
        >
            <Container>
                <FlexContainer 
                    $justify="space-between"
                    $responsiveFlex
                >
                    <Logo>
                        Raul<BlueText>RD</BlueText>
                    </Logo>

                    <MenuIcon
                        onClick={() => { setOpenMenu(true)}}
                    >
                        <GiHamburgerMenu/>
                    </MenuIcon>
                </FlexContainer>
            </Container>

            {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
        </PaddingContainer>
    </NavbarContainer>
  )
}
