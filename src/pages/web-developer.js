import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/common/CTA";
import textwerk from "../assets/image/jpg/textwerk.jpg";
import imgWorkCover from "../assets/image/jpg/details/details-14.jpg";


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
                  <span role="img" aria-label="construction_worker">
                    👷
                  </span>
                  </Title>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  >
                    
                   Over the past 3 years I've studied and have built projects in <br />multiple languages and frameworks.<br />

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
                      <Section className="pb-lg-4">
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
                          <Col lg="6" className="pl-lg-5">
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
            <Box pt={["2rem", null, null, "6.25rem"]}>
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
