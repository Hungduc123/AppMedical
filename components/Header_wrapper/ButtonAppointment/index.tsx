import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Colors } from "../../../constant/colors";

export default function ButtonAppointment() {
  return (
    <View style={{ width: "50%" }}>
      <Button
        color={Colors.primary}
        mode="outlined"
        onPress={() => console.log("Pressed")}
      >
        Đặt Khám
      </Button>
    </View>
  );
}
