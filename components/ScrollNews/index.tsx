import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { Button, Card } from "react-native-paper";
import { data } from "../../FakeData";
import { dataNews } from "../../typeData";

export default function ScrollNews() {
  return (
    <>
      <FlatList
        style={{
          flex: 1,
          width: "100%",
        }}
        data={data}
        keyExtractor={(item) => item.name.toString()}
        ListFooterComponent={() => (
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>MORE</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              style={{
                padding: 10,
                margin: 10,
                borderRadius: 10,
                width: "90%",
              }}
            >
              <Text style={{ color: "black", fontSize: 20, padding: 10 }}>
                {item.name}
              </Text>
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 300, height: 300, borderRadius: 10 }}
                  source={{
                    uri: item.img,
                  }}
                />
              </View>
            </Card>
          </View>
        )}
      ></FlatList>
    </>
  );
}
