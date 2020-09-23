import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    // this shadows properties only work on ios
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    //there is special style props for adding shadow on Android (elevation)
    // this elevetion prop only work on Android elevation simply takes a number but we have less control there
    elevation: 5,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
});
