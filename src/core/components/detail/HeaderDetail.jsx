import React, { Children } from "react";
import "../../styles/views/detailView/components/headerView.css";
import { Link } from "react-router-dom";

const HeaderDetail = (props) => {
  const { title, description } = props.details;
  return (
    <>
      <section className="header-container">
        <span className="back-button-container">
          <Link className="back-button" to="/">{'<'}</Link>
        </span>
        <h1 className="title-header">{title}</h1>
      </section>
    </>
  );
};

export default HeaderDetail;

// const HeaderDetail = (props) => {
//   return (
//   <>
//   <span>◀️</span>
//   <h2>{props.title}</h2>
//   </>
//   )
// }
