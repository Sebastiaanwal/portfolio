import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing2/Hero";
import Works from "../sections/landing2/Works";
import Contact from "../sections/landing1/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Hero />
        <Element name="works">
          <Works />
        </Element>

        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
