import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiTruckLine } from "react-icons/ri"; // Truck icon from react-icons
import { AiOutlineUser } from "react-icons/ai"; // Person icon from react-icons
import { HiOutlineDocumentText } from "react-icons/hi"; // Get Quote icon from react-icons
import { FiLogOut, FiArrowRight } from "react-icons/fi"; // Logout and ArrowRight icons from react-icons
import { RiHomeLine } from "react-icons/ri";
import { FaBoxes } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { BsCalendar, BsExclamationCircle } from "react-icons/bs";
import "./MoveDetails.css"; // Import custom CSS file for styling
import { BiPencil } from "react-icons/bi"; // Import Pencil icon from react-icons
const MoveDetails = () => {
  const [moveDetails, setMoveDetails] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    axios("http://test.api.boxigo.in/sample-data/").then((response) => {
      const data = response.data.Customer_Estimate_Flow;
      console.log(data);
      // console.log(data[0].items.inventory)

      setMoveDetails(data);
      console.log(moveDetails);
    });
  }, []);
  const toggleExpand1 = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  const toggleExpand = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={2}>
          <Navbar expand="sm" className="custom-navbar">
            <Container>
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse id="navbar-nav">
                <Nav className="flex-column">
                  <Nav.Link href="#home">
                    <RiTruckLine className="nav-icon" /> My Moves
                  </Nav.Link>
                  <Nav.Link href="#profile">
                    <AiOutlineUser className="nav-icon" /> My Profile
                  </Nav.Link>
                  <Nav.Link href="#quote">
                    <HiOutlineDocumentText className="nav-icon" /> Get Quote
                  </Nav.Link>
                  <Nav.Link href="#logout">
                    <FiLogOut className="nav-icon" /> Logout
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>

        <Col>
          {moveDetails.length > 0 ? (
            <div>
              {moveDetails.map((val, ind) => (
                <div key={ind}>
                  <Row>
                    <Col>
                      <p>
                        <strong>From:</strong>
                      </p>
                      <p>{val.moving_from}</p>
                    </Col>
                    <Col className="arrow-col">
                      <div className="arrow-wrapper">
                        <FiArrowRight className="arrow-icon" />
                      </div>
                    </Col>
                    <Col>
                      <p>
                        <strong>To:</strong>
                      </p>
                      <p>{val.moving_to}</p>
                    </Col>
                    <Col>
                      <p>
                        <strong>Request#:</strong>
                      </p>
                      <p style={{ color: "red" }}>
                        <strong>{val.estimate_id}</strong>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        <RiHomeLine className="icon" /> {val.property_size}
                      </p>
                    </Col>
                    <Col>
                      <p>
                        <FaBoxes className="icon" /> {val.total_items}
                      </p>
                    </Col>
                    <Col>
                      <p>
                        <RiRoadMapLine className="icon" /> {val.distance}
                      </p>
                    </Col>
                    <Col>
                      <div className="icon-with-pencil">
                        <BsCalendar className="icon" />
                        <span style={{ padding: "5px" }}>
                          {val.date_created}
                        </span>
                        <BiPencil className="pencil-icon" />
                      </div>
                    </Col>
                    <Col>
                      <input
                        type="checkbox"
                        name="Is flexible"
                        style={{ borderColor: "red" }}
                      />
                      <label>Is flexible</label>
                    </Col>
                    <Col>
                      <button
                        className={`custom-button ${
                          activeButton === "moveDetails" ? "active" : ""
                        }`}
                        onClick={() => toggleExpand1(ind)}
                      >
                        {expandedItem === ind
                          ? "Hide move details"
                          : "View move details"}
                      </button>
                    </Col>
                    <Col>
                      <button
                        className={`custom-button ${
                          activeButton === "quotesAwaiting" ? "active" : ""
                        }`}
                        onClick={() => setActiveButton("quotesAwaiting")}
                      >
                        {" "}
                        Quotes Awaiting{" "}
                      </button>
                    </Col>
                    <Row style={{padding:"20px"}}>
                      <p>
                        <BsExclamationCircle className="icon" />
                        <strong style={{padding:"4px"}}>Disclaimer:</strong>Please update your move date
                        before two days of shifting
                      </p>
                    </Row>
                    <Row>
                      {expandedItem === ind && (
                        <div>
                          <Row>
                            <Col>
                              <p>
                                <strong>Additional details:</strong>
                              </p>
                            </Col>
                            <Col>
                              <button
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                  marginLeft: "360px",
                                }}
                              >
                                Edit Additional Info
                              </button>
                            </Col>
                          </Row>
                          <Row>
                            <p>Test Data</p>
                          </Row>
                          <Row>
                            <Col>
                              <p>
                                <strong>House details:</strong>
                              </p>
                            </Col>
                            <Col>
                              <button
                                style={{  backgroundColor: "black", color: "white",  marginLeft: "360px",  }}>
                                Edit House Details
                              </button>
                            </Col>
                          </Row>
                          <Row>
                            <Row>
                              <p >
                                <strong style={{ colo: "red" }}>Existing House Details</strong>
                              </p>
                            </Row>
                            <Col>
                              <strong>Floor No</strong>
                            </Col>
                            <Col>
                              <strong>Elevator Available</strong>
                            </Col>
                            <Col>
                              <strong>
                                Distance from Elevator/Staircase to truck
                              </strong>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <p>{val.old_floor_no}</p>
                            </Col>
                            <Col>
                              <p>{val.old_elevator_availability}</p>
                            </Col>
                            <Col>
                              <p>
                                {Math.floor(
                                  parseFloat(val.old_parking_distance) * 0.3048
                                ) + " meters"}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Row>
                              <Row>
                                <p>
                                  <strong>New House Details</strong>
                                </p>
                              </Row>
                              <Col>
                                <strong>Floor No</strong>
                              </Col>
                              <Col>
                                <strong>Elevator Available</strong>
                              </Col>
                              <Col>
                                <strong>
                                  Distance from Elevator/Staircase to truck
                                </strong>
                              </Col>
                            </Row>
                            <Col>
                              <p>{val.new_floor_no}</p>
                            </Col>
                            <Col>
                              <p>{val.new_elevator_availability}</p>
                            </Col>
                            <Col>
                              <p>
                                {Math.floor(
                                  parseFloat(val.new_parking_distance) * 0.3048
                                ) + " meters"}
                              </p>
                            </Col>
                          </Row>
                          <Row style={{padding:"15px"}}>
                            <Col>
                              <strong>Inventory Details</strong>
                            </Col>
                            <Col>
                              <button style={{ backgroundColor: "black", color: "white", marginLeft: "370px", }} >
                                Edit Inventory
                              </button>
                            </Col>
                            
                          </Row>
                          <Row>
                          {val.items.inventory.map((item, index) => (
                            <div key={index}>
                              <button className="button-expander" onClick={() => toggleExpand(index)} >
                                {item.displayName}{" "}
                                <span className="arrow" >
                                  <strong>{expandedItems.includes(index) ? "▲" : "▼"}</strong>
                                </span>
                              </button>
                              {expandedItems.includes(index) && (
                                <div className="additional-info">
                                  {/* Render additional information here */}
                                  {/* <p>hello</p> */}
                                  <ul>
                                    {item.category.map((val, index1) => (
                                      <li key={index1}>{val.name}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                          </Row>
                        </div>
                      )}
                    </Row>
                  </Row>
                  <hr />
                </div>
              ))}
            </div>
          ) : (
            <p>Loading move details...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MoveDetails;
