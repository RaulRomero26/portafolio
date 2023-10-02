// import React from 'react'

import { Container, MainBody,FadeImage } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from './utils/Theme';

import { Showcase } from './components/Showcase';
import { MySkils } from "./components/MySkils";
import { MyProjects } from "./components/MyProjects";
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
//import componets

import TopFadeImage from './assets/top.png' 
import RightFadeImage from './assets/right.png' 
import LeftFadeImage from './assets/left.png' 
import BottomFadeImage from './assets/bottom.png' 

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <MainBody> 
        <Navbar/>
        <Container>
          <Showcase/>
          <MySkils/>
          <MyProjects/>
          <Footer/>
        </Container>

        <FadeImage src={TopFadeImage} $top="0"/>
        <FadeImage src={LeftFadeImage} $top="30vh"/>
        <FadeImage src={RightFadeImage} $top="300%" $right="0" />
        <FadeImage src={RightFadeImage} $top="120%" $right="0" />
        <FadeImage src={LeftFadeImage} $top="200%"/>
      </MainBody> 
    </ThemeProvider>
    </>
  )
}

export default App
