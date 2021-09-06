import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../../constant/styles";
import { Entypo } from "@expo/vector-icons";
import { Button, Divider, Menu, Provider } from "react-native-paper";
export default function ButtonMenu() {
  const [visible, setVisible] = useState<boolean>(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View style={styles.buttonMenu}>
      <TouchableOpacity>
        <Entypo name="menu" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
}
