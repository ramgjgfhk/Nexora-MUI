import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { DateRange } from "react-date-range";
import { FaSearch } from "react-icons/fa";
import {
  Card,
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Table,
} from "reactstrap";

const UserEngagement = () => {
  const wrapperRef = React.useRef(null);

  const handleFocus = () => {
    wrapperRef.current.classList.add("input-group-focus");
  };

  const handleBlur = () => {
    wrapperRef.current.classList.remove("input-group-focus");
  };
  const [range, setRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const pickerRef = React.useRef();
  const [showPicker, setShowPicker] = React.useState(false);

  const formattedRange = `${format(
    range[0].startDate,
    "MMM dd, yyyy"
  )} - ${format(range[0].endDate, "MMM dd, yyyy")}`;

  const handleSelect = (ranges) => {
    setRange([ranges.selection]);
  };

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        !event.target.classList.contains("date-range-input")
      ) {
        setShowPicker(false);
      }
    }
    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker]);

  const data = [
    {
      id: 433,
      name: "ttl test",
      entryTime: "Apr 21 2023, 06:14 PM",
      status: "Qualified via system control group",
    },
    {
      id: 514,
      name: "test",
      entryTime: "May 01 2023, 01:23 PM",
      status: "Qualified via system control group",
    },
    {
      id: 507,
      name: "old ui sms",
      entryTime: "Apr 27 2023, 11:50 AM",
      status: "Qualified via system control group",
    },
    {
      id: 227,
      name: "long goal name",
      entryTime: "Apr 21 2023, 06:14 PM",
      status: "Exited, cannot re-enter",
    },
    {
      id: 493,
      name: "intellinode manual",
      entryTime: "Apr 21 2023, 06:14 PM",
      status: "Qualified via system control group",
    },
    {
      id: 492,
      name: "intellinode auto",
      entryTime: "Apr 21 2023, 06:14 PM",
      status: "Qualified via system control group",
    },
    {
      id: 415,
      name: "action journey",
      entryTime: "Apr 21 2023, 06:14 PM",
      status: "Qualified via system control group",
    },
    {
      id: 419,
      name: "action - sms",
      entryTime: "Apr 21 2023, 06:14 PM",
      status: "Qualified via system control group",
    },
    {
      id: 270,
      name: "Untitled Journey",
      entryTime: "Apr 21 2023, 06:14 PM",
      status: "Qualified via system control group",
    },
    {
      id: 376,
      name: "Untitled Journey",
      entryTime: "Apr 21 2023, 06:14 PM",
      status: "Qualified via system control group",
    },
    {
      id: 459,
      name: "Untitled Journey",
      entryTime: "Apr 21 2023, 06:14 PM",
      status: "Qualified via system control group",
    },
    {
      id: 480,
      name: "Untitled Journey",
      entryTime: "Apr 21 2023, 10:00 PM",
      status: "Qualified via system control group",
    },
    {
      id: 482,
      name: "Untitled Journey",
      entryTime: "Apr 21 2023, 10:00 PM",
      status: "Qualified via system control group",
    },
    {
      id: 487,
      name: "Untitled Journey",
      entryTime: "Apr 21 2023, 10:00 PM",
      status: "Qualified via system control group",
    },
    {
      id: 285,
      name: "Soumen Test",
      entryTime: "Apr 21 2023, 06:14 PM",
      status: "Qualified via system control group",
    },
  ];
  return (
    <React.Fragment>
      <Row>
        <Col>
          <FormGroup>
            <div className="col-lg-6 p-0" ref={pickerRef}>
              <Input
                type="text"
                value={formattedRange}
                readOnly
                onClick={() => setShowPicker(!showPicker)}
                className="date-range-input"
                style={{ cursor: "pointer", color: "inherit" }}
              />
              {showPicker && (
                <div>
                  <DateRange
                    ranges={range}
                    onChange={handleSelect}
                    locale={enUS}
                    moveRangeOnFirstSelection={false}
                    editableDateInputs={true}
                  />
                </div>
              )}
            </div>
          </FormGroup>
        </Col>
        <Col className="d-flex justify-content-end">
          <div ref={wrapperRef}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FaSearch />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Search by Name or ID"
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </InputGroup>
          </div>
          <div className="ml-2">
            <select id="custom-select">
              <option value="system">Status</option>
              <option value="manual">Manual</option>
            </select>
          </div>
        </Col>
      </Row>
      <Card className="px-5 pt-3">
        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Entry Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, entryTime, status }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{entryTime}</td>
                <td>{status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </React.Fragment>
  );
};

export default UserEngagement;
