import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import { Text, View } from "react-native";
import { IService } from "../types";
import { MaterialIcons } from "@expo/vector-icons";
import { Percent } from "./Percent";
import { getRandomGradient } from "./getRandomGradient";

export const ServiceItem: FC<{ service: IService }> = ({ service }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 20,
          backgroundColor: "yellow",
          marginTop: 15,
          overflow: "hidden",
        }}
      >
        <LinearGradient
          colors={getRandomGradient()}
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Percent percent={service.percent} />
          <MaterialIcons size={30} name={service.iconName} color="#fff" />
        </LinearGradient>
      </View>
      <Text>{service.title}</Text>
    </View>
  );
};
