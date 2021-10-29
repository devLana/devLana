import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const About = () => (
  <section id="about">
    <div className="container">
      <div className="about__container">
        <div className="about__info">
          <div className="about__header">
            <h2>About</h2>
          </div>
          <div className="about__details">
            <p>
              Fascinated by technology from a young age, I always knew I'd end up
              with a career in tech.
            </p>
            <p>
              I started my programming journey with PHP but I soon moved on after I
              discovered the awesomeness that is JavaScript.
            </p>
            <p>
              This is why I've made it a mission to achieve mastery of fullstack
              JavaScript(TypeScript included) and its rich ecosystem of libraries and
              frameworks.
            </p>
            <p>
              As a result I have since built and contributed to projects using
              libraries like React and Express.
            </p>
            <p>
              I'm really eager to see what the future has in store for me as I look
              to get involved in open source projects while at the same time,
              stretching my legs into the world of Vue and Angular.
            </p>
          </div>
        </div>
        <div className="about__image">
          <StaticImage src="../images/programmer.svg" alt="Image" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
