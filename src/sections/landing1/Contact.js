import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, ButtonIcon } from "../../components/Core";
import Availability from "../../components/Availability";

const Hero = () => {

  return (
    <>
      <Section>
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="9">
              <Availability />
              <div className="text-center my-5">
                <Title>Do you need help building or growing an online platform? </Title>
                <Title>Let's talk.</Title>
              </div>
              <div className="text-center">
                <ButtonIcon
                  onClick={() => {
                    window.location.href='https://www.linkedin.com/in/bramvdwaal/'}}
            
                >
                  Send me a message
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
