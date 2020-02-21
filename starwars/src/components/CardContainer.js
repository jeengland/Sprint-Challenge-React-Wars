import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Card from './Card';

const CardContainer = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [homeworlds, setHomeworlds] = useState([]);
    const [films, setFilms] = useState([]);
    const [species, setSpecies] = useState([]);
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/?page=${page}`)
            .then(response => setData(response.data.results))
    },[page])
    useEffect(() => {
        if (data.length > 0) {
            let homes = [];
            data.map((character) => (
                axios.get(character.homeworld)
                    .then(response => setHomeworlds(homeworlds => [...homeworlds, response.data.name]))
            ))
        }
    },[data])
    console.log(homeworlds);
    return (
        <div>
            Hello World
        </div>
    )
}

export default CardContainer;