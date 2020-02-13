import React from "react";
import { Card, Accordion } from "react-bootstrap";

import "./List.css";

const ListItem = () => {
  return (
    <div className="list-item">
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" children={<p>wer</p>}>
            Marilyn Monroe
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="details__item">
                <label className="details__label">Date of Birth:</label>
                <input type="text" defaultValue="Sept. 27, 1996" />
              </div>
              <div className="details__item">
                <label className="details__label">Biography:</label>
                <textarea
                  className="details__textarea"
                  spellCheck="false"
                  defaultValue={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,cumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ex cum impedit sit est! Culpa vitae laboriosam cum exercitationem reprehenderitcumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ex cum impedit sit est! Culpa vitae laboriosam cum exercitationem reprehenderit.\n"
                  }
                />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default function List() {
  return (
    <div className="list-wrapper">
      <ListItem />
      <ListItem />
    </div>
  );
}
