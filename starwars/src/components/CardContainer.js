import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Card from './Card';

const CardContainerSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const CardContainer = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [homeworlds, setHomeworlds] = useState([]);
    const [films, setFilms] = useState([]);
    const [species, setSpecies] = useState([]);
    // Axios call to get character data
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/?page=${page}`)
            .then(response => setData(response.data.results))
            .catch(console.log('No data returned'))
    },[page])
    // Axios calls to get data stored at inner API locations
    useEffect(() => {
        if (data.length > 0) {
            // Had to use multiple maps or the code would break for some reason
            data.map((character) => (
                axios.get(character.homeworld)
                    .then(response => setHomeworlds(homeworlds => [...homeworlds, response.data.name]))
            ))
            data.map((character) => {
                axios.get(character.species)
                    .then(response => setSpecies(species => [...species, response.data.name]));
            })
            data.map((character => {
                let filmList = [];
                character.films.map((film) => {
                    axios.get(film)
                        .then(response => filmList.push(response.data.title));
                })
                setFilms(films => [...films, filmList])
            }))
        }
    }, [data])
    return (
        <CardContainerSection>
            {data.map((data, i) => (
                <Card name={data.name} 
                      key={i}
                      year={data.birth_year}
                      gender={data.gender}
                      height={data.height}
                      weight={data.mass}
                      species={species[i]}
                      homeworld={homeworlds[i]}
                      films={films[i]}
                    />
            ))}
        </CardContainerSection>
    )
}

export default CardContainer;