import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyText = (props) => (
  <Text Style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans-bold",
  },
});

export default BodyText;
