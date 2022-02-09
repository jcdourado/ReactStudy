import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const getPrimaryColor = ({ theme }) => theme.colors.primary.main;

const Root = styled.div`
  text-align: center;

  & h5 {
    margin: 16px 0;
    min-height: 3.12rem;

    ${breakAt(BreakpointSizes.lg)} {
      min-height: 3.9rem;
    }
  }

  & p {
    margin: 0;
  }
`;

const IconRoot = styled.div`
  width: 116px;
  height: 116px;
  padding: 8px;
  border-radius: 50%;
  display: inline-block;

  &:hover {
    border: 1px solid ${getPrimaryColor};

    > * {
      color: #fff;
      background-color: ${getPrimaryColor};
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e9e9e9;
  border-radius: 50%;
  font-size: 32px;
  width: 100%;
  height: 100%;
  color: ${getPrimaryColor};
`;

const Feature = ({ icon, title, children }) => (
  <Root>
    <IconRoot>
      <IconContainer>{icon}</IconContainer>
    </IconRoot>
    <h5>{title}</h5>
    <div>{children}</div>
  </Root>
);

Feature.defaultProps = {
  icon: undefined,
  title: "",
  children: undefined,
};

Feature.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Feature;
