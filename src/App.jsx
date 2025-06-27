import { useState } from "react";
import "./App.css";
import KajabiWeeklyDigest from "./KajabiWeeklyDigest";
import ClickSpark from "./ClickSpark";
import RotatingText from "./RotatingText";
import Hero from "./Hero";

function App() {
  return (
    <>
      <Hero></Hero>
      <ClickSpark
        sparkColor='#00008B'
        sparkSize={30}
        sparkRadius={50}
        sparkCount={10}
        duration={650}
      >
        <KajabiWeeklyDigest></KajabiWeeklyDigest>
      </ClickSpark>
      ;
    </>
  );
}

export default App;
