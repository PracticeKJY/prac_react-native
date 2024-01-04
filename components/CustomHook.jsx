import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

const CustomHook = () => {
  const { value: name, setValue: setName, resetValue: resetName } = useInput("");
  const { value: age, setValue: setAge, resetValue: resetAge } = useInput("");
  const { value: city, setValue: setCity, resetValue: resetCity } = useInput("");

  return (
    <View style={styles.container}>
      <InputBox value={name} onChangeText={setName} placeHolder="이름을 입력해 주세요" resetHandler={resetName} />
      <InputBox value={age} onChangeText={setAge} placeHolder="나이을 입력해 주세요" resetHandler={resetAge} />
      <InputBox value={city} onChangeText={setCity} placeHolder="사는곳을 입력해 주세요" resetHandler={resetCity} />
    </View>
  );
};

export default CustomHook;

// custom hook
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const resetValue = () => setValue(initialValue);
  return { value, setValue, resetValue };
};

// component
const InputBox = ({ value, onChangeText, placeHolder, resetHandler }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput value={value} onChangeText={onChangeText} style={{ borderBottomWidth: 1, width: 200 }} placeholder={placeHolder} />
      <Button title="초기화" onPress={resetHandler} style={styles.reset_button} />
    </View>
  );
};
// style
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
  reset_button: {
    backgroundColor: "#fff",
  },
});
