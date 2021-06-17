import styled from 'styled-components';

export const Overlay = styled.div`
    background: rgba(242, 243, 245, 0.85);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    /* align-items: center; */
`

export const Container = styled.div`
    margin-top: 120px;
    width: 100%;
    max-width: 400px;
    height: 360px;
    background: #fefefe;
    border-radius: 8px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

    padding: 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 10px;
    }

    header button {
        background: none;
        border: none;
        color: #a3a3a3;
        font-size: 14px;
        font-weight: 400px;

        margin-left: 8px;

        cursor: pointer;
    }
`

export const Input = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    span {
        font-size: 16px;
        color: #525252;

        margin-bottom: 4px;
    }

    input, select {
        width: 100%;
        height: 35px;
        padding: 0 8px;

        border-radius: 5px;
        border: 1px solid #CCC;
        background: #fff;

        font-size: 12px;
        color: #121212;
    }
`

export const Button = styled.div`
    margin-top: 12px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    button {
        width: 70%;
        height: 35px;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
        
        border: none;
        border-radius: 5px;
        background: #24ad5b;
        color: #fff;
        
        font-size: 16px;
        letter-spacing: 1px;
        font-weight: bold;

        cursor: pointer;
        transition: background-color 0.3s
    }

    button:hover {
        background: #219c52;
    }
`