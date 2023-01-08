import {useEffect, useState} from "react";
import requests from "../Requests";
import axios from "axios";

const Main = () => {

    const [movies, setMovies] = useState([]);
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular)
            .then((res) => setMovies(res.data.results))
            .catch((e) => console.log(e))
    }, [])

    return (<div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black" />
            <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`} alt={randomMovie?.title}/>
        </div>
    </div>);
};

export default Main;