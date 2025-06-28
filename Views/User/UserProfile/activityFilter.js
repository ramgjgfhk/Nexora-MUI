import React from "react";
import { Card, CardBody, Row, Table } from "reactstrap";

const ActivityFilter = () => {
  const events = [
    {
      name: "App Launched",
      firstOn: "Wed, May 15, 2019",
      lastOn: "Tue, Jun 9, 2020",
      count: 179,
    },
    {
      name: "App Uninstalled",
      firstOn: "Sun, Jun 30, 2019",
      lastOn: "Sat, May 23, 2020",
      count: 17,
    },
    {
      name: "Charged",
      firstOn: "Wed, May 15, 2019",
      lastOn: "Sat, Jun 6, 2020",
      count: 22,
    },
    {
      name: "Searched",
      firstOn: "Mon, Jun 10, 2019",
      lastOn: "Wed, Jun 10, 2020",
      count: 228,
    },
  ];
  return (
    <Card>
      <CardBody>
        <Row className="d-flex justify-content-end px-3">
          <select id="custom-select">
            <option value="system">Filter By Events</option>
            <option value="manual">Filter By Past Behavior</option>
          </select>
        </Row>
        <hr id="hrLine" />
        <Table borderless>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                <td className="align-middle" width="5%"></td>
                <td className="align-middle" width="60%">
                  <div>{event.name}</div>
                  <small>
                    <div>First On : {event.firstOn}</div>
                    <div>Last On : {event.lastOn}</div>
                  </small>
                </td>
                <td className="align-middle text-end">
                  <strong>{event.count} times</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ActivityFilter;
