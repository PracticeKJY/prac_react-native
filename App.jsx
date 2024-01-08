// import react hook
import { useState } from "react";

// import widget
import { View, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// import local data
import { myProfile, friendProfiles } from "./src/data";

// import component
import Header from "./components/Header";
import Profile from "./components/Profile";
import Margin from "./components/Margin";
import Division from "./components/Division";
import FriendSection from "./components/FriendSection";
import TabBar from "./components/TabBar";

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Profile uri={item.uri} name={item.name} introduce={item.introduction} />
      </View>
    );
  };
  const ItemSeparatorComponent = () => <Margin height={13} />;

  const ListHeaderComponent = () => {
    return (
      <View style={{ backgroundColor: "white" }}>
        <Header />
        <Margin height={10} />
        <Profile uri={myProfile.uri} name={myProfile.name} introduce={myProfile.introduction} isMe={true} />
        <Margin height={15} />
        <Division />
        <FriendSection friendProfileLength={friendProfiles.length} onPress={onPressArrow} isOpened={isOpened} />
      </View>
    );
  };

  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["top", "right", "bottom", "left"]}>
        <FlatList
          data={isOpened ? friendProfiles : []}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          keyExtractor={(_, i) => i}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
        />
        <TabBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

//  safeAreaView = 자동으로 핸드폰의 상단조절
// 모바일 상단에 딱 맞게 조절되도록 위젯들을 배치하는 방법
// 1. SafeAreaView
// 2. react-native-safe-area-context
// 2.1 주의점1. react-native에서 safeAreaView를 import 해서 사용하는 것이 아닌 , safe-area-context에서 import 해야함.
//     주의점2. flex:1 을 꼭 넣어야 justifyContent같은 flex 관련 속성들을 사용할 수 있음.
