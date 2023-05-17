import React from "react";
import "./styles.scss";
import { SocialButton } from "./SocialButton";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="name-container">
        I am <div className="block-caps">Anugrah</div>{" "}
        <div className="block-caps"> Mishra</div>
      </div>
      <div className="job-title">Frontend Developer</div>
      <div className="summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        asperiores aliquam nisi consequatur nostrum, animi architecto ab debitis
        pariatur quasi accusantium, adipisci aspernatur, impedit velit maxime
        reprehenderit numquam non esse!
      </div>

      <section className="social">
        <SocialButton />
      </section>
    </div>
  );
};
