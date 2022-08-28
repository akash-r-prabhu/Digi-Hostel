import styled from "styled-components/macro";

import {Link as LinkS} from "react-scroll";

export const Button = styled(LinkS)`
    border-radius: 50px;
    white-space: nowrap;
    background: #8f00ff;
    padding: ${({big}) => big ? '14px 48px' : '12px 30px'};
    color: ${({dark}) => dark ? '#010606' : '#fff'};
    font-size: ${({fontBig}) => fontBig ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin-top: 50px;
    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 0.5;
    }
`