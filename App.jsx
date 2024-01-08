// import widget
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// import local data
import { myProfile } from "./src/data";

// import component
import Header from "./components/Header";
import MyProfile from "./components/MyProfile";
import Margin from "./components/Margin";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <Margin height={10} />
        <MyProfile uri={myProfile.uri} name={myProfile.name} introduce={myProfile.introduction} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//  safeAreaView = 자동으로 핸드폰의 상단조절
// 모바일 상단에 딱 맞게 조절되도록 위젯들을 배치하는 방법
// 1. SafeAreaView
// 2. react-native-safe-area-context
// 2.1 주의점1. react-native에서 safeAreaView를 import 해서 사용하는 것이 아닌 , safe-area-context에서 import 해야함.
//     주의점2. flex:1 을 꼭 넣어야 justifyContent같은 flex 관련 속성들을 사용할 수 있음.
