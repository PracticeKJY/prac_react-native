//  import styled-components
import styled from "styled-components/native";

//  import icons
import { Ionicons, Fontisto } from "@expo/vector-icons";

const TabBar = ({ selectedIdx, setSelectedIdx }) => {
  return (
    <TabBarWrap>
      <TabButton isSelected={selectedIdx === 0} onPress={() => setSelectedIdx(0)} activeIconName={"person"} inactiveIconName={"persons"} isIconFontisto />
      <TabButton isSelected={selectedIdx === 1} onPress={() => setSelectedIdx(1)} activeIconName={"chatbubble"} inactiveIconName={"chatbubble-outline"} isIconIonicons />
      <TabButton isSelected={selectedIdx === 2} onPress={() => setSelectedIdx(2)} activeIconName={"pricetag"} inactiveIconName={"pricetag-outline"} isIconIonicons />
      <TabButton isSelected={selectedIdx === 3} onPress={() => setSelectedIdx(3)} activeIconName={"add-circle"} inactiveIconName={"add-circle-outline"} isIconIonicons />
    </TabBarWrap>
  );
};

export default TabBar;

const TabBarWrap = styled.View`
  flex-direction: row;
  border-top-width: 0.5px;
  border-color: gray;
`;

// TabButton
const TabButton = ({ isSelected, onPress, activeIconName, inactiveIconName, isIconFontisto, isIconIonicons }) => {
  return (
    <TabButtonWrap
      // activeOpacity={1}
      onPress={onPress}
    >
      {isIconFontisto && <Fontisto name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />}
      {isIconIonicons && <Ionicons name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />}
    </TabButtonWrap>
  );
};

const TabButtonWrap = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
