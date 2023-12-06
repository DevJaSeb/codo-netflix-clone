import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/banner.css";

const URL_BASE = "https://api.themoviedb.org/3";
const apiKey = "e17ac1fcb6bb2a80eda731131dedbdce";

const randomMovie = (response) => {
  return response.data.results[
    Math.floor(Math.random() * response.data.results.length)
  ];
};

const adapter = (movie) => {
  return {
    id: movie.id,
    title: movie.original_title,
    img: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
  };
};

const Banner = () => {
  const [data, setData] = useState({
    id: "",
    title: "",
    img: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL_BASE}/discover/movie`, {
          params: {
            api_key: apiKey,
            language: "en-US",
            sort_by: "popularity.desc",
          },
        });
        const movie = randomMovie(response);
        const adapted = adapter(movie);
        setData(adapted);
      } catch (error) {
        console.log("the error is:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="ban-container">
      <h1 className="ban-title">{data.title}</h1>
      <img className="ban-img" src={data.img} alt={data.title} />
      {/* <iframe src="" frameborder="0"></iframe> */}
    </div>
  );
};

export default Banner;
