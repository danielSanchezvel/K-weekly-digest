import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <main className='hero-main'>
      <section class='hero-section'>
        <div class='floating-elements'>
          <div class='floating-element'></div>
          <div class='floating-element'></div>
          <div class='floating-element'></div>
          <div class='floating-element'></div>
        </div>

        <div class='hero-content'>
          <div class='weekly-badge'>Weekly Edition</div>
          <h1 class='main-title'>Kajabi Weekly Digest!</h1>
          <div class='decorative-line'></div>
          <p class='subtitle'>
            Your curated collection of the week's most important insights
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
