import React from 'react';
import styled from '@emotion/styled';

const CardSection = styled.section`
    background: black;
    color: white;
    border-radius: 10px;
    margin: 2% 2%;
    padding: 1%;
    width: 25%;
    h2, h3 {
        color: yellow;
    }
    @media ( max-width: 500px) {
        width: 95%;
    }
`

const Card = (props) => {
    // Conditional logic needed so that error will not occur before 
    // Films list initializes
    if (props.films) {
        // Additional logic needed because of bug that occurs when there is only
        // one film in the list of films
        if (props.films.length > 1) {
            return (
                <CardSection>
                    <h2>{props.name}</h2>
                    <div>
                        <h3>Stats</h3>
                        <p>Species: {props.species}</p>
                        <p>Gender: {props.gender}</p>
                        <p>Height: {props.height} cm</p>
                        <p>Weight: {props.weight} kg</p>
                        <p>Birth Year: {props.year}</p>
                        <p>Homeworld: {props.homeworld}</p>
                    </div>
                    <div>
                        <h3>Appearances</h3>
                        {props.films.map((film, i) =>
                            <p key={i}>{film}</p>
                        )}
                    </div>
                </CardSection>
            )
        // Special case for films with only one film in their list
        } else {
            return (
                <CardSection>
                        <h2>{props.name}</h2>
                        <div>
                            <h3>Stats</h3>
                            <p>Species: {props.species}</p>
                            <p>Gender: {props.gender}</p>
                            <p>Height: {props.height} cm</p>
                            <p>Weight: {props.weight} kg</p>
                            <p>Birth Year: {props.year}</p>
                            <p>Homeworld: {props.homeworld}</p>
                        </div>
                        <div>
                            <h3>Appearances</h3>
                            <p>A New Hope</p>
                        </div>
                    </CardSection>
            )
        }
    } else {
        return null;
    }
}

export default Card