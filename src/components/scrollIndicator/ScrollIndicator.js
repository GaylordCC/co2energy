import { useEffect, useState } from "react";
import styled from "styled-components";
import "./__style__/index.css";

const ProgressContainer = styled.div`
  width: 100%;
  height: 15px;
  background: #ccc;
`;
const ProgressBar = styled.div`
  height: 15px;
  background: ${(props) => props.color || "#ccc"};
  width: ${(props) => props.width || 0}%;
`;
const ProgressText = styled.span`
  font-size: 1rem;
`;

const ScrollIndicator = ({ color, showText }) => {
  const [progressWidth, setProgressWidth] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgressWidth(scrolled);
    };
  }, []);

  return (
    <ProgressContainer>
      <ProgressBar width={progressWidth} color={color}>
        {showText && (
          <ProgressText width={progressWidth}>{`${Math.round(
            progressWidth
          )}%`}</ProgressText>
        )}
      </ProgressBar>
    </ProgressContainer>
  );
};

export default ScrollIndicator;