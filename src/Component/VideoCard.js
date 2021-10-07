import React, { forwardRef } from 'react'
import "./CSS/VideoCard.css"
import TextTruncate from 'react-text-truncate'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const base_url="https://image.tmdb.org/t/p/original/";

const  VideoCard = forwardRef(({movie} ,ref) => {
    return (
        <div ref={ref} className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
                alt="" />
            <TextTruncate 
            element="p"
            line={2}
            truncateText="..."
            text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className="videoCard__stats">
                {movie.media_type && `${movie.media_type} •`}
                {movie.release_date || movie.first_air_date} •
                <ThumbUpAltIcon />&nbsp;
                {movie.vote_count} 
            </p>
        </div>
    )
});

export default VideoCard
