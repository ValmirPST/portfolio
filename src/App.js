import Header from './components/Header';
import HeroPage from './components/HeroPage/HeroPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects/Projects';
import './assets/css/style.js';

function App() {
  return (
    <div className="App">

      <Header />

      <section className="background-fixed">
        <HeroPage />
        <AboutMe />
      </section>

      <Projects />

    </div>
  );
}

export default App;
