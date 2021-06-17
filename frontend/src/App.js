import GlobalStyle from "./styles/globalStyle";

import { Container } from './styles/index'
import Orders from './components/Orders'
import logo from './images/logo.svg'

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <img src={logo} alt="ezOrders" />
        <Orders />
      </Container>

    </>
  );
}

export default App;
