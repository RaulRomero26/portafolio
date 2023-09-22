// import React from 'react'

import { Container, MainBody } from "./styles/Global.styled"
import { ThemeProvider } from "styled-components"
import { theme } from './utils/Theme'

import { Showcase } from './components/Showcase'
import { MySkils } from "./components/MySkils"
//import componets



function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <MainBody> 
        <Container>
          <Showcase/>
          <MySkils/>
        </Container>
      </MainBody> 
    </ThemeProvider>
    </>
  )
}

export default App
