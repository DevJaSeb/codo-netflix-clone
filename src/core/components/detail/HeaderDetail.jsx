import React, { Children } from 'react'
import '../../styles/views/detailView/components/headerView.css'

const HeaderDetail = (props) => {
  const {title, description} = props.detailsMovie
  return (
  <>
  <span>◀️</span>
  <h2>{title}</h2>
  <p>{description}</p>
  
  </>
  )
}

export default HeaderDetail


// const HeaderDetail = (props) => {
//   return (
//   <>
//   <span>◀️</span>
//   <h2>{props.title}</h2>  
//   </>
//   )
// }


