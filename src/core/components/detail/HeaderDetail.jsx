import React, { Children } from 'react'
import '../../styles/views/detailView/components/headerView.css'

const HeaderDetail = ({children}) => {
  return (
  <>
  <span>◀️</span>
  <h2>{children}</h2>
  
  </>
  )
}

export default HeaderDetail