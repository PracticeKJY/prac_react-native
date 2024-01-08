// import styled-components
import styled from "styled-components/native";

// import Icons
import { Ionicons } from "@expo/vector-icons";

const IoniconsWrap = styled.View`
  padding: 0 6px;
`;

// Header

const Header = () => {
  return (
    <HeaderWrap>
      <Title>친구</Title>
      <IconButtonWrap>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="md-musical-notes-outline" />
        <IconButton name="ios-settings-outline" />
      </IconButtonWrap>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const IconButtonWrap = styled.View`
  flex-direction: row;
`;

// IconButton

const IconButton = ({ name }) => {
  return (
    <IoniconsWrap>
      <Ionicons name={name} size={24} color="black" />
    </IoniconsWrap>
  );
};
