import { ScrollView } from "react-native";
import Profile from "./Profile";

const FriendList = ({ data, isOpened }) => {
  return (
    !!isOpened && (
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, i) => {
          return <Profile key={i} uri={item.uri} name={item.name} introduce={item.introduction} />;
        })}
      </ScrollView>
    )
  );
};

export default FriendList;

// 리스트랜더링의 방법
// 1. map()
// 2. <FlatList />

// hide Scroll bar  = showsVerticalScrollIndicator={false}

// (!!isOpened)  = isOpened로 하면 문자열로 받아들일 수 있기 떄문에 boolean형으로 형 변환
