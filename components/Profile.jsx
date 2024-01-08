// import styled-components
import styled from "styled-components/native";

// import Components
import Margin from "./Margin";

const Profile = ({ uri, name, introduce, isMe = false }) => {
  const size = isMe ? 50 : 40;
  return (
    <Container>
      <ProfileImg source={{ uri: uri }} size={size} />
      <TextWrap>
        <Name isMe={isMe}>{name}</Name>
        <IntroductionText isMe={isMe}>{introduce}</IntroductionText>
      </TextWrap>
      <Margin height={6} />
    </Container>
  );
};

export default Profile;

const Container = styled.View`
  flex-direction: row;
`;

const ProfileImg = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size * 0.4}px;
`;

const TextWrap = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

const Name = styled.Text`
  font-weight: ${(props) => (props.isMe ? "bold" : "normal")};
  font-size: ${(props) => (props.isMe ? 16 : 15)}px;
`;

const IntroductionText = styled.Text`
  font-size: ${({ isMe }) => (isMe ? 12 : 11)}px;
  color: grey;
`;
