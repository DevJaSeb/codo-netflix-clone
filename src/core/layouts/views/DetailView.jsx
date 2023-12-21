import React from 'react'
import HeaderDetail from '../../components/detail/HeaderDetail'
import '../../styles/views/detailView/detailView.css'
import BodyDetail from '../../components/detail/BodyDetail'
import useMovieData from '../../hooks/useMovieData'
import { useParams } from 'react-router-dom'

const DetailView = () => {
  const {id} = useParams();
  const {detailsMovie } = useMovieData(id);
  return (
    <>
        <HeaderDetail
          title = {detailsMovie?.title}
        >       
        </HeaderDetail>
        <BodyDetail/>
    </>
  )
}

export default DetailView