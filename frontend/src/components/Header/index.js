import { OrdersContext } from '../../contexts/OrdersContext'
import { useContext } from 'react'

import { Container } from './styles'
import logo from '../../images/logo.svg'

export default function Header() {
    const { openNewOrderModal } = useContext(OrdersContext)
    
    return (
        <Container>
            <img src={logo} alt="ezOrders" />
            <button type="button" onClick={openNewOrderModal}>Novo Pedido</button>
        </Container>
    )
}