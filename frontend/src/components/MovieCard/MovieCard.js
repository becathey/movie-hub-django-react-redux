import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = (props) => {
    const {data} = props

    return (
        <Link to={`/movies/api/movies/${data.id}`} className='card-link'>
            <div className="card">
                <div className="card-body">
                    <img src={data.image} className="card-image" />
                    <h2 className="card-title">{data.title}</h2>
                    <p className="card-director">{data.director}</p>
                </div>
                <div className="card-footer">
                    <p className="card-genre">{data.genre}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard