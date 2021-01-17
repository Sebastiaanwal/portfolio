import React from 'react'
import Typical from 'react-typical'
import { Title } from "../Core";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";
import { device } from "../../utils";
  

const TypicalStyle = styled(Title)`
  color: #fff;
`;

const Typicalstyles = styled(Typical)`
font-weight: 700;
  letter-spacing: -2.5px;
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 0;
  color: #fff;


  @media ${device.sm} {
    font-size: 50px;
    line-height: 62px;
  }

  @media ${device.lg} {
    font-size: 60px;
    line-height: 70px;
  }

  ${space};
  ${typography};
  ${shadow};
`;



const TypingAnimation = () => {
    return (
<TypicalStyle>    
    Nononsense freelancer<br /> who loves to

      <Typicalstyles
        steps={['grow your customer base', 700, 'code a bit', 700, 'build online products', 700]}
        loop={2}
        wrapper="h2"
      />
</TypicalStyle>      );
  };

export default TypingAnimation