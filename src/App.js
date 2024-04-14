import Header from "./components/Header";
import HeroPage from "./components/HeroPage/HeroPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects/Projects";
import InfoPage from "./components/InfoPage/InfoPage.jsx";
import Footer from "./components/Footer.jsx";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <Header />

      <section className="background-fixed">
        <HeroPage />
        <AboutMe />
      </section>

      <Projects />

      <InfoPage />

      <Footer />
    </div>
  );
}

export default App;
