import React from "react";
import { FaBell, FaGlobe, FaTag } from "react-icons/fa";
import { Table } from "reactstrap";

const UserDetails = () => {
  return (
    <>
      <h4>Devices used</h4>
      <Table responsive>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Push Notifications</th>
            <th>Type</th>
            <th>OS Version</th>
            <th>Application version</th>
            <th>Nexora SDK verison</th>
            <th>Device make</th>
            <th>Device Model</th>
            <th>Browser</th>
            <th>Operation System</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FaGlobe size={20} />
            </td>
            <td>
              <div>
                <FaTag /> Firefox
              </div>
              <div>
                <FaBell /> Firefox
              </div>
            </td>
            <td>Desktop</td>
            <td>13.0</td>
            <td>2.4.1</td>
            <td>1.0.5</td>
            <td>Samsung</td>
            <td>Galaxy S21</td>
            <td>Chrome 120</td>
            <td>Android</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default UserDetails;
