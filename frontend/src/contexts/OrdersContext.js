import { createContext, useState } from 'react';
import Form from '../components/Form'

export const OrdersContext = createContext({});

export function OrdersProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openNewOrderModal() {
        setIsModalOpen(true);
    }

    function closeNewOrderModal() {
        setIsModalOpen(false);
    }

    return (
        <OrdersContext.Provider
            value={{
                openNewOrderModal,
                closeNewOrderModal
            }}
        >
            {children}
            {isModalOpen && <Form />}
        </OrdersContext.Provider>
    )
}