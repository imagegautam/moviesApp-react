import React, { useState, useEffect } from 'react';
import './banner.css';

const Banner = () => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const [movie, setMovie] = useState([]); // Change to single movie object

    const fetchApi = () => {
        fetch('https://www.omdbapi.com/?apikey=42c8ba0c&t=') // Provide a valid title
            .then(res => res.json())
            .then(data => {
                console.log('Fetched Data:', data); // Log the fetched data
                if (data.Response === "True") {
                    setMovie(data);
                } else {
                    console.log('Movie not found:', data.Error); // Log the error message if movie not found
                }
            })
            .catch(e => console.log('Fetch Error:', e.message)); // Log any fetch errors
    };

    useEffect(() => {
        fetchApi();
    }, []);

    if (!movie) return <div>Loading...</div>; // Conditional rendering

    return (
        <div className="banner">
            <div className="movie">
                <img src={movie.Poster !== "N/A" ? movie.Poster : `${IMGPATH}/default.jpg`} alt={movie.Title} className="bgImg active" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="content active">
                                <h1 className="movie-title">{movie.Title}</h1>
                                <h4>
                                    <span>{movie.Year}</span>
                                    <span><i>{movie.Rated}</i></span>
                                    <span>{movie.Runtime}</span>
                                    <span>{movie.Genre}</span>
                                </h4>
                                <p>{movie.Plot}</p>
                                <div className="button">Button</div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* Additional content here if needed */}
                            <div className="date">
                                <h2>On 15th August</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
