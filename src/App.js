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
import OneInfoScreen from "./screens/infos/OneInfoScreen";
import HomeScreen from "./screens/home/HomeScreen";
import OneCandidatScreen from "./screens/candidats/OneCandidatScreen";
import ResultatScreen from "./screens/resultat/ResultatScreen";
import ProvinceStat from "./screens/statistique/center/ProvinceStat";
import CenterStat from "./screens/statistique/center/CenterStat";
import OneCenterStat from "./screens/statistique/center/OneCenterStat";
import OneResultProvince from "./screens/resultat/OneResultProvince";
import OneResultCenter from "./screens/resultat/OneResultCenter";

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
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
      <Route
        path="/candidat/lists"
        element={
          <Layout>
            <CandidatScreen />
          </Layout>
        }
      />
      <Route
        path="/candidat/lists/:nom"
        element={
          <Layout>
            <OneCandidatScreen />
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
        path="/province/stat/lists"
        element={
          <Layout>
            <ProvinceStat />
          </Layout>
        }
      />
      <Route
        path="/center/lists/:province"
        element={
          <Layout>
            <CenterScreen />
          </Layout>
        }
      />
      <Route
        path="/center/stat/lists/:province"
        element={
          <Layout>
            <CenterStat />
          </Layout>
        }
      />
      <Route
        path="/center/stat/:id"
        element={
          <Layout>
            <OneCenterStat />
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
      <Route
        path="/infos/:id"
        element={
          <Layout>
            <OneInfoScreen />
          </Layout>
        }
      />
      <Route
        path="/resultats/data"
        element={
          <Layout>
            <ResultatScreen />
          </Layout>
        }
      />
      <Route
        path="/resultats/data/:id"
        element={
          <Layout>
            <OneResultProvince />
          </Layout>
        }
      />
      <Route
        path="/center/result/lists/:province"
        element={
          <Layout>
            <OneResultCenter />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
