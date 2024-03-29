import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import WorkMobile from "./WorkMobile";
import WorkLarge from "./WorkLarge";
import { siteConfig } from "../utils/siteConfig";
import "../styles/components/Work.scss";

const { home } = siteConfig;

const Work = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    const screenSize = () => {
      setWidth(window.innerWidth);
    };

    setWidth(window.innerWidth);

    window.addEventListener("resize", screenSize);

    return () => {
      window.removeEventListener("resize", screenSize);
    };
  }, []);

  const { allFile } = useStaticQuery(query);

  return (
    <section id="work">
      <div className="container">
        <div className="work__container">
          <div className="work__header">
            <h2>{home.work.header}</h2>
            <p>{home.work.text}</p>
          </div>
          <div className="work__slide__images">
            {width < 768 ? (
              <WorkMobile images={allFile.edges} />
            ) : (
              <WorkLarge images={allFile.edges} />
            )}
          </div>
          <div className="work__footer">
            <Link to="/projects">View More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const query = graphql`
  query Slides {
    allFile(
      sort: { fields: name, order: ASC }
      filter: { dir: { regex: "/slides/" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export default Work;
