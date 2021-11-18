import React from "react";

// style
import styled from 'styled-components';

const SectionTitle = ({children}) =>{
    return(
        <Title>
            {children}
        </Title>
    )
}

const Title = styled.h2`
    color: #3cff00;
    // color: #fff;
    font-size: 16px;
    font-family: Syncopate,sans-serif;
    margin: 0 0 50px 0;
    text-transform: uppercase;
    letter-spacing: 5px;
`;

export default SectionTitle;