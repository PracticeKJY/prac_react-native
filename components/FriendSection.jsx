// import styled-components
import styled from "styled-components/native";

// import icons
import { MaterialIcons } from "@expo/vector-icons";

const FriendSection = ({ friendProfileLength, onPress, isOpened }) => {
  return (
    <FriendSectionWrap>
      <Title>친구 {friendProfileLength}</Title>
      <ArrowButtonWrap onPress={onPress}>
        <MaterialIcons name={isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="black" />
      </ArrowButtonWrap>
    </FriendSectionWrap>
  );
};

export default FriendSection;

const FriendSectionWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: gray;
`;

const ArrowButtonWrap = styled.TouchableOpacity``;
