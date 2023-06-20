import React, { useEffect } from "react";

import { Col, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { FiLogOut, FiArrowRight } from "react-icons/fi";
import { RiHomeLine } from "react-icons/ri";
import { FaBoxes } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { BsCalendar, BsExclamationCircle } from "react-icons/bs";

const NextPage = () => {
    // const location = useLocation();

    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const movingFrom = searchParams.get("moving_from");
      const movingTo = searchParams.get("moving_to");
      const estimateId = searchParams.get("estimate_id");
      const propertySize = searchParams.get("property_size");
      const totalItems = searchParams.get("total_items");
      const distance = searchParams.get("distance");
      const dateCreated = searchParams.get("date_created");
      const val = location.state ? location.state.val : null;
  
      // Now you have the individual query parameters available
      console.log(movingFrom, movingTo, estimateId, propertySize, totalItems, distance, dateCreated, val);
    }, []);


    const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const moveData = {
    moving_from: queryParams.get("moving_from"),
    moving_to: queryParams.get("moving_to"),
    estimate_id: queryParams.get("estimate_id"),
    property_size: queryParams.get("property_size"),
    total_items: queryParams.get("total_items"),
    distance: queryParams.get("distance"),
    date_created: queryParams.get("date_created"),
    

  };
  console.log(moveData,'hello');
  // Check if moveData exists before accessing its properties
  if (!moveData.moving_from) {
    return <p>No move data available.</p>;
  }
  

  return (
    <Container>
    <Row>
        <Col>
        <p>
        <strong>From:</strong> {moveData.moving_from}
      </p>
        </Col>
        <Col className="arrow-col">
          <div className="arrow-wrapper">
            <FiArrowRight className="arrow-icon" />
             </div>
        </Col>
      <Col>
      <p>
        <strong>To:</strong> {moveData.moving_to}
      </p>
      </Col>
      <Col>
      <p>
        <strong>Request#:</strong>
        <p style={{color: 'red'}}><strong>{moveData.estimate_id}</strong></p>
      </p>
      </Col>
      <Row>
      <Col>
      <p>
      <RiHomeLine className="icon" /> {moveData.property_size}
      </p>
      </Col>
      <Col>
      <p>
      <FaBoxes className="icon" /> {moveData.total_items}
      </p>
      </Col>
      <Col>
      <p>
      <RiRoadMapLine className="icon" /> {moveData.distance}
      </p>
      </Col>
      <Col>
      <p>
      <BsCalendar className="icon" /> {moveData.date_created}
      </p>
      </Col>
      <Col>
      <button className={`custom-button ${activeButton === "moveDetails" ? "active" : "" }`} onClick={() => setActiveButton("moveDetails")} > View move details</button>
      </Col>
      <Col>
       <button  className={`custom-button ${ activeButton === "quotesAwaiting" ? "active" : "" }`}  onClick={() => setActiveButton("quotesAwaiting")} > Quotes Awaiting </button>
        </Col>
        <Row>
          <p><BsExclamationCircle className="icon" /><strong>Disclaimer:</strong>Please update your move date before two days of shifting</p>
       </Row>
      </Row>
      <Row>
        <Col>
        <p></p>
        </Col>
      </Row>
    </Row>
    </Container>
  );
};

export default NextPage;

