import React from 'react';
import styled from '@emotion/styled';

const TurnerDiv = styled.div`
    width: 50%;
`

const PageFlip = (props) => {
    return (
        <TurnerDiv>
            <button onClick={props.function}>{props.text}</button>
        </TurnerDiv>
    )
}

export default PageFlip;