import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/common/CTA";
import textwerk3 from "../assets/image/jpg/textwerk-3.jpg";
import textwerk2 from "../assets/image/jpg/textwerk-2.jpg";
import textwerk from "../assets/image/jpg/textwerk.jpg";
import imgWorkCover from "../assets/image/jpg/details/details-1.jpg";
import imgS1 from "../assets/image/jpg/details/details-12.jpg";
import imgS2 from "../assets/image/jpg/details/details-11.jpg";
import imgS3 from "../assets/image/jpg/details/details-10.jpg";
import imgS4 from "../assets/image/jpg/details/details-9.jpg";
import imgS5 from "../assets/image/jpg/details/details-14.jpg";
import imgS6 from "../assets/image/jpg/details/details-13.jpg";
import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Section hero>
          <Container>
            <Row >
              <Col lg="8">
                <Box>
                  <Text variant="tag">FREELANCE WEB DEVELOPER</Text>
                  <Title className="my-4">
                  Let's build!
                  </Title>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  >
                   Over the past 3 years I've studied and build projects in multiple languages<br />

                   <ul>
                    <li>- ReactJS</li>
                    <li>- NodeJS</li>                   
                    <li>- Redux</li>
                    <li>- Python / Django</li>
                    <li>- React native</li>
                    <li>- GatsbyJS / Wordpress</li>
                    <li>- Docker / Kubernetes</li>
                  </ul>
                 
                  </Text>
                 
              
                </Box>
                </Col>
                </Row>
               
                  <Box pt={["4rem", null, null, "6.25rem"]}>
                    <img src={imgWorkCover} alt="" className="img-fluid w-100" />
                  </Box>

               

                <Row >
              <Col lg="8">
                <Box>
                      <Section className="mb-5 pb-lg-4">
                      <Text className="mb-5" variant="tag">FREELANCE SERVICES</Text>

                        <Row>
                          <Col lg="6" className="mb-5 pr-lg-5">
                            <Title variant="cardBig" className="mb-4">
                              01. Static websites
                            </Title>
                            <Text variant="p">
                            I build SEO friendly static websites in either Wordpress or GatsbyJS.
                            </Text>
                          </Col>
                          <Col lg="6" className="mb-5 pl-lg-5">
                            <Title variant="cardBig" className="mb-4">
                              02. Online platforms
                            </Title>
                            <Text variant="p">
                            I help you build server side rendered online platforms using the latest ReactJS, React Native and NodeJS principles. 
                            </Text>
                          </Col>
                          
                        </Row>
                      </Section>
                    </Box>
              </Col>
            </Row>
            <Box pt={["4rem", null, null, null]}>
                    <img src={textwerk} alt="" className="img-fluid w-100" />
                  </Box>
           
          </Container>
        </Section>

  
       

        
        <Box py={4}>
          <CTA />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
