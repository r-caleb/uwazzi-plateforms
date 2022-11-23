import React from "react";
import { Tab, Tabs } from "react-bootstrap";

const StatScreen = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="enrolés" title="Enrolements">
          AAA
        </Tab>
        <Tab eventKey="présidentiels" title="Présidentiels">
          BBBB
        </Tab>
        <Tab eventKey="national" title="Députation Nationale">
          CCC
        </Tab>
        <Tab eventKey="provincial" title="Députation provinciale">
          DDD
        </Tab>
      </Tabs>
    </div>
  );
};

export default StatScreen;
