import React from 'react'

const MovieCard = (props) => {
    const {data} = props

    return (
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
    )
}

export default MovieCard