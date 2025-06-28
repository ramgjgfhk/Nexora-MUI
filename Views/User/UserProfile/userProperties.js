import { useActiveColor } from "context/activeColor";
import React from "react";
import { Badge, Card, CardBody, Table } from "reactstrap";

const UserProperties = () => {
  const { ActiveThemeColor } = useActiveColor();
  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <p className="mb-0">Communication Preference</p>
          <Badge className="ms-3" color={ActiveThemeColor}>
            User Properties
          </Badge>
        </div>
        <Table>
          <tbody>
            <tr>
              <td>Age</td>
              <td>32 years 4 months</td>
            </tr>
            <tr>
              <td>Birthday</td>
              <td>May 03, 2003</td>
            </tr>
            <tr>
              <td>Customer Type</td>
              <td>Silver</td>
            </tr>
            <tr>
              <td>Customer ID</td>
              <td>85659865855</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>English</td>
            </tr>
            <tr>
              <td>Timezone</td>
              <td>Central standard time</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default UserProperties;
