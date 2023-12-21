import React from "react";
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
  } = useMovieData(id);
 

  return (
    <>
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
              details={{detailsMovie,similarMovies}}
            ></BodyDetail>
          )}
        </>
      )}
      {type === "tvseries" && (
        <>
          {detailsSerieLoading && <div>Loading...</div>}
          {!detailsSerieLoading && (
            <BodyDetail details={detailsSerie}></BodyDetail>
          )}
        </>
      )}
    </>
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
