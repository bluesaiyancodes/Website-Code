import React from "react";
import Col from "react-bootstrap/Col";

const EducationCard = ({ value }) => {
  const {
    degree,
    university,
    time,
    status
  } = value;
  return (
      <Col md="12">
      < div className="p-2">
          <h5>{university} </h5>
          <div className="primary-text">{degree} - <span className="secondary-text">{time} || <i>{status}</i></span></div>
         <hr />
       </div>
      </Col>
  );
};


export default EducationCard;
