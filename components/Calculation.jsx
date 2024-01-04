import { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";

const Calculation = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("");

  const plusHandler = () => {
    setCount(count + 1);
  };

  const toggleHandler = (v) => {
    console.log(v, "v");
    setIsOn(v);
  };
  const onChange = (v) => {
    console.log(v, "v");
    setName(v);
  };

  return (
    <View style={styles.container}>
      <Text>지은이가 당신의 화면을 본 횟수 : {count}</Text>
      <Button title="눌러조" onPress={plusHandler} />
      <Text>-------------------------</Text>
      <Switch value={isOn} onValueChange={toggleHandler} />
      <Text>-------------------------</Text>
      <TextInput value={name} onChangeText={onChange} placeholder="텍스트를 입력해주세요" />
    </View>
  );
};

export default Calculation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "pink",
    fontSize: 20,
    fontWeight: "bold",
  },

  main_banner: {
    width: 400,
    height: 200,
  },
});
