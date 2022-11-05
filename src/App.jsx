import styled, { createGlobalStyle, css } from "styled-components"
import { AppRoutes } from "./routes/Routes.jsx"

function App() {

  return (
    <Container bg>
      <GlobalStyle />
      <AppRoutes />
    </Container>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`

const Container = styled.div`
    min-height: 100vh;
    background: url('./src/assets/background-app.jpg') center center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    ${props => props.bg && css `
      background-color: #69A8E9;
    `}
`

export default App