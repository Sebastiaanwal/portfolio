import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/common/CTA";
import textwerk from "../assets/image/jpg/textwerk.jpg";
import imgWorkCover from "../assets/image/jpg/details/details-12.jpg";



const WorkSingle = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Section hero>
          <Container>
            <Row >
              <Col lg="8">
                <Box>
                  <Text variant="tag">FREELANCE PRODUCT MANAGER</Text>
                  <Title className="my-4">
                    Balancing new functionalities, design <br/> and conversion
                  </Title>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  >
                   Over the past 5 years I've worked on multiple static websites and online platforms. <br />

                   <ul>
                    <li>- Product manager</li>
                    <li>- Personal projects</li>                   
                    <li>- Online persuasion / CRO</li>
                    <li>- Web development </li>
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
                              01. Product management
                            </Title>
                            <Text variant="p">
                              I'll help you plan, develop, design and implement new online products. 
                            </Text>
                          </Col>
                          <Col lg="6" className="mb-5 pl-lg-5">
                            <Title variant="cardBig" className="mb-4">
                              02. CRO
                            </Title>
                            <Text variant="p">
                              Using the latest online persuasion and design principles I'll help you optimize your conversation rates. 
                            </Text>
                          </Col>
                          <Col lg="6" className="mb-5 pr-lg-5">
                            <Title variant="cardBig" className="mb-4">
                              03. Co-founder
                            </Title>
                            <Text variant="p">
                             I'm designing and developing online products in my spare time.  
                            </Text>
                          </Col>
                          <Col lg="6" className="pl-lg-5">
                            <Title variant="cardBig" className="mb-4">
                              04. Web development
                            </Title>
                            <Text variant="p">
                             Let's develop an online product that converts and leads or users will love. Tools: ReactJs/NodeJs.
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

        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
              <Text className="mb-5" variant="tag">CLIENTS</Text>
                <Title variant="cardBig" className="mt-3">
                Textwerk (ecommerce translation agency)
                </Title>
                <Title variant="cardBig" className="mt-3">
                Decision Path (software comparison platform, personal project)
                </Title>
                <Title variant="cardBig" className="mt-3">
                Consulto (US/NL chatplatform)
                </Title>
              </Col>
             
            </Row>
          </Container>
        </div>
       

        
        <Box py={4}>
          <CTA />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
