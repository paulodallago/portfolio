import "./App.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { InfoPanel } from "./components/InfoPanel";
import { LinkPanel } from "./components/LinkPanel";
import { ProjectsPanel } from "./components/ProjectsPanel";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div id="home">
      <Header />
      <Card />
      <InfoPanel />
      <ProjectsPanel />
      <LinkPanel />
      <Footer />
    </div>
  );
};

export default App;
