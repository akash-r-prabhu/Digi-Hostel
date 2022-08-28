import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 80px;
`

export const CardElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    flex-basis: 100%;
    margin: 20px 5px;
    padding: 30px;
    font-size: 1.5rem;
    color: #8f00ff;
    max-width: 30rem;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    opacity: 0.9;
`

export const Text = styled.p`
    color: #6c63ff;
    font-size: 1.3rem;
    
`

export const SubText = styled.div`
    color: #000;
    margin-top: 10px;
    font-size: 0.8rem;
`
export const Link = styled.p`
    color: #0000ff;
    font-size: 0.8rem;
    margin-top: 10px;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
        color: #8f00ff;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 2px solid #c3c3c3;
    padding: 5px;
    color: #000;
    font-size: 1rem;
    margin-top: 10px;
    &:focus{
        border: 2px solid #6c63ff;
        outline: none;
    }
`

export const Label = styled.label`
    color: #000;
    font-size: 0.8rem;
    margin-top: 10px;
    float: left;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 100%;
    max-width: 30rem;
`