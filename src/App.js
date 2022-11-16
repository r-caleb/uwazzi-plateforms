import "./App.scss";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import { Route, Routes, Navigate } from "react-router-dom";
import CandidatScreen from "./screens/candidats/CandidatScreen";
import CenterScreen from "./screens/center/CenterScreen";
import ProvinceScreen from "./screens/center/ProvinceScreen";
import MapScreen from "./screens/map/MapScreen";
import StatScreen from "./screens/statistique/StatScreen";
import InfoScreen from "./screens/infos/InfoScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <SideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout>APP</Layout>} />
      <Route
        path="/candidat/lists"
        element={
          <Layout>
            <CandidatScreen />
          </Layout>
        }
      />
      <Route
        path="/province/lists"
        element={
          <Layout>
            <ProvinceScreen />
          </Layout>
        }
      />
      <Route
        path="/center/lists/:provinceId"
        element={
          <Layout>
            <CenterScreen />
          </Layout>
        }
      />
      <Route
        path="/center/map"
        element={
          <Layout>
            <MapScreen />
          </Layout>
        }
      />
      <Route
        path="/stats"
        element={
          <Layout>
            <StatScreen />
          </Layout>
        }
      />
      <Route
        path="/infos"
        element={
          <Layout>
            <InfoScreen />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
