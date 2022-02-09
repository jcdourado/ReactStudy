import React from "react";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import styled from "styled-components";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Nardini Auto Escola</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at,
            pariatur porro corporis aliquam, sint dolorum tempora voluptas
            fugiat sit eius magnam molestiae maxime quo ab. Omnis unde fugiat
            nostrum.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (12) 12345-6789
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at,
            pariatur porro corporis aliquam
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
            <p>
              <FooterLink target="_blank" href="#">
                <IconContainer>
                  <FaFacebookF />
                </IconContainer>
                Facebook
              </FooterLink>
            </p>
            <p>
              <FooterLink target="_blank" href="#">
                <IconContainer>
                  <FaLinkedinIn />
                </IconContainer>
                LinkedIn
              </FooterLink>
            </p>
            <p>
              <FooterLink target="_blank" href="#">
                <IconContainer>
                  <FaTwitter />
                </IconContainer>
                Twitter
              </FooterLink>
            </p>
          </Heading>
        </div>
      </Grid>
    </Container>
  </Root>
);

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
