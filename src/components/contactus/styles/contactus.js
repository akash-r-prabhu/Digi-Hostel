import styled from 'styled-components/macro' 

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 80px;
    
    background:  #f5f5f5;
    flex-direction: column;
`

export const Title = styled.h1`
    color: #000;
    font-size: 2.5rem;
`

export const Text = styled.p`
    color: #000;
    font-size: 1.5rem;
    margin-top: 20px;
`


export const Frame = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 100%;
    margin: 20px 5px;
    font-size: 1.5rem;
    color: #8f00ff;

    & > svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
        margin: 0 10px;
    }
`
export const Button = styled.button`
    background: #8f00ff;
    margin-top: 50px;
    border-radius: 20px;
    border: 0;
    padding: 10px;
    color: #fff;
    &:hover{
        opacity: 0.5;
    }
`
export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 100%;
    margin: 20px 5px;

`

export const SubTitle = styled.p`
    color: #000;
    // text-decoration: underline;
    margin: 0 10px;
    cursor: pointer;
    &:hover{
        color: #8f00ff;
    }
    font-size: 0.8rem;
`