import { FC } from "react";
import { Text, View } from "react-native";

export const Percent: FC<{ percent: number }> = ({ percent }) => {
  return (
    <View
      style={{
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderRightWidth: 50,
        borderTopWidth: 50,
        borderRightColor: "transparent",
        borderTopColor: "#AAEF00",
        transform: [{ rotate: "90deg" }],
      }}
    >
      <Text
        style={{
          width: 30,
          height: 20,
          position: "absolute",
          fontSize: 10,
          fontWeight: "600",
          transform: [{ rotate: "-40deg" }],
          top: -45,
          left: 10,
        }}
      >
        {percent + "%"}
      </Text>
    </View>
  );
};
