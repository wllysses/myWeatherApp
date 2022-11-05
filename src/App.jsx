import { createGlobalStyle } from "styled-components"
import { AppRoutes } from "./routes/Routes.jsx"

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  .App {
    min-height: 100vh;
    background: url('./src/assets/25501.jpg') center center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`

export default App