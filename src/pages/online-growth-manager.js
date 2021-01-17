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
                  <Text variant="tag">FREELANCE ONLINE GROWTH MANAGER</Text>
                  <Title className="my-4">
                  More users, more leads <br/> and more recurring business?
                  </Title>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  >
                   Over the past 8 years I've gained broad experience in almost all traits of online growth (B2B / B2C):<br />

                   <ul>
                    <li>- SEO / SEA</li>
                    <li>- E-mail</li>                   
                    <li>- Paid Facebook, Instagram, LinkedIn</li>
                    <li>- Online persuasion / CRO</li>
                    <li>- Strategy / branding </li>
                    <li>- CRM / marketing automation</li>
                  </ul>
                   
                  <br/> Jack of all traits, master of none? Maybe so. I think I've been quite thorough on most marketing channels resulting in qualified b2b leads and new paying users (b2c). Because of my broad experience I'm able to combine all channels quite well and generate extra business value.
                               
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
                              01. SEO / content
                            </Title>
                            <Text variant="p">
                            Let's start with a thorough content and technical seo analysis and build a fierce seo strategy that actually results in qualified leads or new paying users. 
                            </Text>
                          </Col>
                          <Col lg="6" className="mb-5 pl-lg-5">
                            <Title variant="cardBig" className="mb-4">
                              02. Paid social / SEA
                            </Title>
                            <Text variant="p">
                            After a deep analysis of your target audience(s), company resources and technical setup. I will build a nononsense paid social stratgy that will generate qualified leads, new paying users or recurring business. 
                            </Text>
                          </Col>
                          <Col lg="6" className="mb-5 pr-lg-5">
                            <Title variant="cardBig" className="mb-4">
                              03. Email / marketing automation
                            </Title>
                            <Text variant="p">
                              I will help you define a strategy to grow your email lists, choose the right e-mail or marketing automation tool and define strategies to warm up your leads and potential new paying users.
                            </Text>
                          </Col>
                          <Col lg="6" className="pl-lg-5">
                            <Title variant="cardBig" className="mb-4">
                              04. Strategy / branding
                            </Title>
                            <Text variant="p">
                              As your interim online marketing lead/CMO lead I'll help you build up a motivated team, position your online brand and define a nononsense online marketing strategy. 
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

        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
              <Text className="mb-5" variant="tag">CLIENTS</Text>
                <Title variant="cardBig" className="mt-3">
                Vodafone
                </Title>
                <Title variant="cardBig" className="mt-3">
                Tele2
                </Title>
                <Title variant="cardBig" className="mt-3">
                SpotOnVision (B2B agency)
                </Title>
                <Title variant="cardBig" className="mt-3">
                Textwerk (ecommerce translation agency)
                </Title>
                <Title variant="cardBig" className="mt-3">
                Consulto (US/NL based startup)
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
