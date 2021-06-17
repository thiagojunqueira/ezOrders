import { useContext, useState } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext'
import { Container, Input, Button, Overlay } from './styles'

export default function Form() {
    const { closeNewOrderModal } = useContext(OrdersContext)
    
    const [table, setTable] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('PENDING')

    const baseURL = 'http://localhost:3001';

    async function handleSubmitButton() {
        const response = await fetch(`${baseURL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                table,
                description,
                status
            })
        });
        if (response.status !== 200) {
            console.log("Something went wrong!");
        }

        setTable('');
        setDescription('');
        setStatus('PENDING');
    }

    return (
        <Overlay>
            <Container>
                <header>
                    <h3>Cadastrar novo Pedido</h3>
                    <button type="button" onClick={closeNewOrderModal}>Fechar</button>
                </header>

                <Input>
                    <span>Mesa</span>
                    <input type="text" placeholder="Insira o número da mesa" value={table} onChange={(e) => setTable(e.target.value)} />
                </Input>

                <Input>
                    <span>Pedido</span>
                    <input type="text" placeholder="Insira a descrição do pedido" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Input>

                <Input>
                    <span>Status do Pedido</span>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="PENDING">Pendente</option>
                        <option value="PREPARING">Preparando</option>
                        <option value="DONE">Finalizado</option>
                    </select>
                </Input>

                <Button>
                    <button type="button" onClick={handleSubmitButton}>Enviar Pedido</button>
                </Button>
            </Container>
        </Overlay>
    )
}