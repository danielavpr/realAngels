import React from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
`;

const LoaderElement = styled.div`
  border: 16px solid rgba(1, 191, 113, 0.5);
  border-top: 16px #01BF71 solid;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  animation: spin 2s linear infinite;
  margin: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderElement />
    </LoaderWrapper>
  );
};

export default Loader;
