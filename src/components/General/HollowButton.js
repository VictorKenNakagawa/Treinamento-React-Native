import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HollowButton({text, onPress, textStyle, width=250, height=49, disabled=false}) {
  
  let styles = StyleSheet.create({
    filledButton: {
      backgroundColor: "#fff",
      borderColor: '#FF0800',
      borderWidth: 1.5,
      width: width,
      height: height,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: disabled ? 0.5 : 1.0,
    },
    text: {
      color: '#FF0800',
      fontSize: 23,
      fontWeight: 'normal',
    }
  });

  return (
      <TouchableOpacity
        style={styles.filledButton}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={textStyle || styles.text}>{text}</Text>
      </TouchableOpacity>
  );
};