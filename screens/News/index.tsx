import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { View, Text } from "react-native";
import ButtonMenu from "../../components/Header_wrapper/ButtonMenu";
import Header_wrapper from "../../components/Header_wrapper";
import ScrollNews from "../../components/ScrollNews";

export default function News() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "lightskyblue",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <Header_wrapper />
      </View>
      <View style={{ flex: 4, width: "100%" }}>
        <ScrollNews />
      </View>
    </SafeAreaView>
  );
}
