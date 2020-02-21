import React from 'react';

const PageFlip = (props) => {
    return (
        <button onClick={props.function}>{props.text}</button>
    )
}

export default PageFlip;