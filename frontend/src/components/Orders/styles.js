import styled, { css } from 'styled-components';

export const Container = styled.div`
    margin-top: 42px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;
    width: 100%;

    @media(min-width: 650px) {
        grid-template-columns: 1fr 1fr;
    }
`

const cardStatusVariants = {
    PREPARING: css`
        background: #F6A609;
        color: #fff;

        header small {
            background: #fff;
            color: #0A100D;
        }

        select {
            border-color: #fff;
        }
    `,
    DONE: css`
        background: #2AC769;
        color: #fff;

        header small {
            background: #fff;
            color: #0A100D;
        }

        select {
            border-color: #fff;
        }
    `
}

export const Card = styled.div`
    background: #fff;
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            font-size: 18px;
            font-weight: 500;
        }

        small {
            padding: 4px 8px;
            background: #CCC;
            border-radius: 5px;
            color: #fff;
            font-weight: bold;
            font-size: 12px;
            justify-content: center;
            align-items: center;
        }
    }

    p {
        font-size: 14px;
        margin-top: 16px;
    }

    select {
        margin-top: 8px;
        width: 100%;
        height: 45px;
        padding: 0 8px;

        border-radius: 5px;
        border: 1px solid #CCC;
        background: #fff;

        font-size: 14px;
    }

    ${({ status }) => cardStatusVariants[status] || null}
`