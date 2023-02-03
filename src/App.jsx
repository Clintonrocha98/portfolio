import "./styles/reset.scss";
import "./styles/app.scss";

import Header from "./assets/components/header";
import CardAboutMe from "./assets/components/cardAboutMe";
import Projects from "./assets/components/projectsGithub";
import { UserData } from "./assets/components/useContext";

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <div className="container frontPag">
          <UserData>
            <CardAboutMe />
            <Projects />
          </UserData>
        </div>
      </main>
    </>
  );
}
export default App;
