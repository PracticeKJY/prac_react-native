import { useState, useEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Switch, Text, TextInput, View, ActivityIndicator } from "react-native";

const LearnUseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);
  useEffect(() => {
    console.log("didMount");
  });

  useEffect(() => {
    console.log("didUpdate - count", count);
  }, [count]);
  useEffect(() => {
    console.log("didUpdate - isOn", isOn);
  }, [isOn]);
  useEffect(() => {
    console.log("didUpdate - name", name);
  }, [name]);

  useEffect(() => {
    if (isRefresh) {
      setTimeout(() => {
        setIsRefresh(false);
      }, 2000);
    }
  }, [isRefresh]);

  const plusHandler = () => {
    setCount(count + 1);
  };

  const toggleHandler = (v) => {
    setIsOn(v);
  };
  const onChange = (v) => {
    setName(v);
  };

  return (
    <View style={styles.container}>
      <Text>지은이가 당신의 화면을 본 횟수 : {count}</Text>
      <Button title="눌러조" onPress={plusHandler} />
      <Text style={styles.line}>-------------------------</Text>
      <Switch value={isOn} onValueChange={toggleHandler} />
      <Text style={styles.line}>-------------------------</Text>
      <Text>name : {name}</Text>
      <TextInput value={name} onChangeText={onChange} placeholder="텍스트를 입력해주세요" />
      <Text style={styles.line}>-------------------------</Text>
      <Button
        title="새로고침!"
        onPress={() => {
          setIsRefresh(true);
        }}
      />
      {isRefresh && <ActivityIndicator />}
    </View>
  );
};

export default LearnUseEffectComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  line: {
    marginVertical: 15,
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
