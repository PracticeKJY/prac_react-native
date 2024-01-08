import { Image, View, Text } from "react-native";
import Margin from "./Margin";

const MyProfile = ({ uri, name, introduce }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image source={{ uri: uri }} style={{ width: 50, height: 50, borderRadius: 20 }} />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
        <Margin height={6} />
        <Text style={{ color: "gray", fontSize: 12 }}>{introduce}</Text>
      </View>
    </View>
  );
};

export default MyProfile;
