// import styled-components
import styled from "styled-components/native";

const Margin = ({ height }) => {
  return <MarginComponents height={height} />;
};

export default Margin;

const MarginComponents = styled.View`
  height: ${(props) => props.height}px;
`;
