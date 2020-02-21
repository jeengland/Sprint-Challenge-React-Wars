import React, { useEffect } from 'react';
import styled from '@emotion/styled';

const Card = (props) => {
    return (
        <div>
            <h2>Name</h2>
            <div>
                <h3>Stats</h3>
                <p>Height cm</p>
                <p>Weight kg</p>

            </div>
        </div>
    )
}

export default Card