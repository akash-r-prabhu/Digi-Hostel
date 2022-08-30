import styled from 'styled-components';


export const Box = styled.div`
    height: auto;
    width: 35rem;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    border-bottom: 1px solid #e6e6e6;

    & > svg{
        color: #6c63ff;
        font-size: 1.5rem;
    }
`
export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    color: #6C63FF;
    margin-left: 0.5rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`
export const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: #000;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`