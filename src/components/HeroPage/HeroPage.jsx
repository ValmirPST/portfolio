import React, { Component } from "react";
import UsualLinks from './UsualLinks';
import TitleContainer from './TitleContainer'

class HeroPage extends Component {
  render() {
    return (
      <>
        <main className="hero-page">

          <TitleContainer />
          <UsualLinks />

        </main>
      </>
    )
  }
}

export default HeroPage;
