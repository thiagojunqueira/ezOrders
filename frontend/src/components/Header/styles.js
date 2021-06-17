import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
        width: 120px;
        padding: 4px;
        margin-left: 8px;
        border: 1px solid #333a9c;

        background: #202899;
        color: #fff;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

        font-size: 14px;
        font-weight: 500;

        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:hover {
        background: #181e70;
    }
`