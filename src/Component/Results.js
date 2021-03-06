import React, { useState, useEffect } from 'react'
import "./CSS/Results.css"
import VideoCard from './VideoCard'
import axios from './ApiFolder/axios'
import Flipmove from 'react-flip-move'
function Results({selectedOption}) {

    const [movies,setMovies]= useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(selectedOption)
            setMovies(request.data.results)
            console.log(request.data.results)
            return request
        }
        fetchData();
    },[selectedOption])

    return (
        <div className="results">
            <Flipmove>
            {movies.map((movie)=>{
                return <VideoCard key={movie.id} movie={movie}/>  
            })}
            </Flipmove>
        </div>
    )
}

export default Results
