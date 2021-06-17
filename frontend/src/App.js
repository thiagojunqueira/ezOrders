import GlobalStyle from "./styles/globalStyle";
import { Container } from './styles/index'
import Orders from './components/Orders'
import Header from './components/Header'
import { OrdersProvider } from './contexts/OrdersContext'

function App() {
  return (
    <OrdersProvider>
      <GlobalStyle />

      <Container>
        <Header />
        <Orders />
      </Container>
      
    </OrdersProvider>
  );
}

export default App;
