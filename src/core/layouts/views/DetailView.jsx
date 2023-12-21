import React, { useEffect, useRef } from "react";
import HeaderDetail from "../../components/detail/HeaderDetail";
import "../../styles/views/detailView/detailView.css";
import BodyDetail from "../../components/detail/BodyDetail";
import useMovieData from "../../hooks/useMovieData";
import { useParams } from "react-router-dom";

const DetailView = () => {
  const { type, id } = useParams();
  const {
    detailsMovie,
    detailsMovieLoading,
    detailsSerie,
    detailsSerieLoading,
    similarMovies,
    similarSeries,
  } = useMovieData(id);

  const imageUrlRef = useRef(null);

  useEffect(() => {
    const details = type ==="movies" ? detailsMovie : detailsSerie;
    if(details){
      imageUrlRef.current = details.backdrop;
    }
  },[type, detailsMovie, detailsSerie]);

  return (
    <div className="container-detail" style ={{backgroundImage: `url(${imageUrlRef.current})`}} >
      {type === "movies" && (
        <>
          {detailsMovieLoading && <div>Loading...</div>}
          {!detailsMovieLoading && (
            <HeaderDetail details={detailsMovie}></HeaderDetail>
          )}
        </>
      )}
      {type === "tvseries" && (
        <>
          {detailsSerieLoading && <div>Loading...</div>}
          {!detailsSerieLoading && (
            <HeaderDetail details={detailsSerie}></HeaderDetail>
          )}
        </>
      )}
      {type === "movies" && (
        <>
          {detailsMovieLoading && <div>Loading...</div>}
          {!detailsMovieLoading && (
            <BodyDetail
              details={detailsMovie}
              similar={similarMovies}
              type={"movies"}
            ></BodyDetail>
          )}
        </>
      )}
      {type === "tvseries" && (
        <>
          {detailsSerieLoading && <div>Loading...</div>}
          {!detailsSerieLoading && (
            <BodyDetail
              details={detailsSerie}
              similar={similarSeries}
              type={"tvseries"}
            ></BodyDetail>
          )}
        </>
      )}
    </div>
  );
};
export default DetailView;

// return (
//   <>
//
//       <HeaderDetail
//       title={detailsMovie?.title}></HeaderDetail>
//

//     <BodyDetail />
//   </>
// );
