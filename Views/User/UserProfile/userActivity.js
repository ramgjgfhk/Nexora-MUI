import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const TimelineEvent = ({ time, title, description }) => (
  <Row className="mb-3 align-items-start">
    <Col xs="2" className="text-end text-muted small">
      {time}
    </Col>
    <Col xs="10">
      <div>
        <h6>{title}</h6>
      </div>
      {description && <div className="text-muted small">{description}</div>}
    </Col>
  </Row>
);

const UserActivity = () => {
  return (
    <React.Fragment>
      <h3 className="mb-2">User activity details</h3>
      <Row>
        <Col className="col-12 col-md-4">
          <Card className="p-5">
            <Card className="p-3 d-flex flex-column align-items-center justify-content-center" style={{border:'1px solid #ccc'}}>
              <p>Avg. visit duration is</p>
              <h2>9 minutes</h2>
            </Card>
            <Card className="p-3 d-flex flex-column align-items-center justify-content-center" style={{border:'1px solid #ccc'}}>
              <p>Avg. time between visit is</p>
              <h2>2 days</h2>
            </Card>
          </Card>
        </Col>
        <Col className="col-12 col-lg-8">
          <Card>
            <CardBody>
              <div className="p-3">
                <h3 className="mb-4">Fri, April 21, 2023</h3>

                <TimelineEvent
                  time="06:15:02 pm"
                  icon="icon-email-85"
                  title="Reachable By"
                  description="Push | YNsR2..."
                />
                <TimelineEvent
                  time="06:15:02 pm"
                  icon="icon-email-85"
                  title="Reachable By"
                  description="Email | akimggg2221@gmail.com"
                />

                <hr />

                <TimelineEvent
                  time="06:45:51 am"
                  icon="icon-compass-05"
                  title="UTM Visited"
                  description="Google | gSrc | gMed | gcCamp"
                />
                <TimelineEvent
                  time="06:45:51 am"
                  icon="icon-credit-card"
                  title="Charged"
                  description="Card | 39001 | 8.11 | 2.0 | Mobile | ... | USD | 06/07/2022 05:30:40 am"
                />
                <TimelineEvent
                  time="06:45:02 am"
                  icon="icon-single-02"
                  title="Identity Set"
                  description="akimggg2221@gmail.com | New User | SDK |"
                />
                <TimelineEvent
                  time="06:44:58 am"
                  icon="icon-compass-05"
                  title="UTM Visited"
                  description="Google | gSrc | gMed | gcCamp"
                />
                <TimelineEvent
                  time="06:44:58 am"
                  icon="icon-credit-card"
                  title="Charged"
                  description="Card | 39001 | 8.11 | 2.0 | Mobile | ... | USD | 06/07/2022 05:30:40 am"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UserActivity;
