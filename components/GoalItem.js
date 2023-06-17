import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "white" }} //android'e özel üzerine gelindiğinde feedback veriyor
        style={({ pressed }) => pressed && styles.pressedItem} //iphone cihazlarda da üzerine gelindiğinde feedback veriyor. => Alternatif oluşturduk!
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.8,
    backgroundColor: "red",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
