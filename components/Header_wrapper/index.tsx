import React from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { styles } from "../../constant/styles";
import ButtonAppointment from "./ButtonAppointment";
import ButtonMenu from "./ButtonMenu";
// import styles from "../../constant/styles"
export default function Header_wrapper() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: any) => setSearchQuery(query);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ width: "100%" }}>
        <Searchbar
          style={styles.searchbar}
          placeholder="Nhập từ khóa"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View>
        <ButtonAppointment />
      </View>
    </View>
  );
}
