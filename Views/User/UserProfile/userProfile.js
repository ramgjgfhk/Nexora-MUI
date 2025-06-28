import { useActiveColor } from "context/activeColor";
import React from "react";
import { FaSmile } from "react-icons/fa";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import UserProperties from "./userProperties";
import ActivityFilter from "./activityFilter";

const UserProfile = (props) => {
  const { activeTab } = props;
  const { ActiveThemeColor } = useActiveColor();
  return (
    <Row className="mb-0">
      <Col md="7" className="d-flex">
        <Card>
          <CardHeader>
            <div className="d-flex align-items-center">
              <div
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "30px",
                }}
                className={`bg-${ActiveThemeColor}`}
              >
                <FaSmile />
              </div>
              <div className="ml-3">
                <h2 className="mb-0">Jhon Turner</h2>
                <p>Email: jhon@gmail.com</p>
              </div>
            </div>
          </CardHeader>
          <hr />
          <CardBody>
            <Row className="text-left align-items-stretch">
              <Col
                md={12}
                lg
                className="d-flex flex-column border-end border-secondary-subtle mb-3 mb-lg-0"
              >
                <div className="flex-grow-1">
                  <p className="mb-4">ID: 856595688888</p>
                  <p className="mb-4">Phone: 8565856958</p>
                  <p className="mb-4">
                    Location: Chicago, Illinois, United States
                  </p>
                </div>
              </Col>

              <Col
                md={12}
                lg
                className="d-flex flex-column border-end border-secondary-subtle mb-3 mb-lg-0"
              >
                <div className="flex-grow-1">
                  <p className="mb-4">Gender : Male</p>
                  <p className="mb-4">Lat: 47.256336</p>
                  <p className="mb-4">Long: 487.8565555</p>
                </div>
              </Col>

              <Col md={12} lg className="d-flex flex-column">
                <div className="flex-grow-1">
                  <p className="mb-4">Telephone: 9656585658</p>
                  <p className="mb-4">First Seen: Thu, Feb 22, 2024</p>
                  <p className="mb-4">Last seen: Fri, May 16, 2025</p>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col md="5">
        {activeTab === "profile" ? (
          <UserProperties />
        ) : activeTab === "activity" ? (
          <ActivityFilter />
        ) : null}
      </Col>
    </Row>
  );
};

export default UserProfile;
