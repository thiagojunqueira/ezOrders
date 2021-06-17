import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

import { Container, Card } from './styles'

export default function Orders() {
    const baseURL = 'http://localhost:3001';
    const [orders, setOrders] = useState([])


    useEffect(() => {
        (async () => {
            const res = await fetch(`${baseURL}/orders`);
            const orders = await res.json();
            setOrders(orders)
        })();

        const socket = socketIOClient(baseURL, {
            transports: ['websocket']
        });

        socket.on('newOrder', (order) => {
            setOrders(
                (prevState) => [order, ...prevState],
            )
        });

        socket.on('statusChange', (updatedOrder) => {
            setOrders( (prevState) => (
                prevState.map( (order) => {
                    return order._id === updatedOrder._id ? updatedOrder : order;
                })
            ))
        });
    }, []);

    function handleStatusChange(order) {
        return ({ target: {value} }) => {
            fetch(`${baseURL}/orders/${order._id}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: value }),
            })
        };
    }

    

    return (
        <Container>
            {orders.map(order => {
                return (
                    <Card status={order.status} key={order._id}>
                        <header>
                            <h3>Pedido <strong>#{order._id.substr(0, 10)}</strong></h3>
                            <small>MESA #{order.table}</small>
                        </header>

                        <p>{order.description}</p>

                        <select value={order.status} onChange={handleStatusChange(order)}>
                            <option value="PENDING">Pendente</option>
                            <option value="PREPARING">Preparando</option>
                            <option value="DONE">Finalizado</option>
                        </select>
                    </Card>
                )
            })}

        </Container>
    )
}