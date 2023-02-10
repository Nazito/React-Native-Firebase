import { FC } from "react";
import { Text, View } from "react-native";

export const CardPreview: FC<{ type: string; cardNumber: string }> = ({
  type,
  cardNumber,
}) => {
  return (
    <View
      style={{
        width: 60,
        height: 40,
        borderRadius: 5,
        padding: 4,
        backgroundColor: type === "Black" ? "rgba(0,0,0, .8)" : "#ccc",
        justifyContent: "flex-end",
      }}
    >
      <Text
        style={{
          color: type === "Black" ? "#fff" : "auto",
          fontSize: 12,
          fontWeight: "700",
        }}
      >
        ...{cardNumber.slice(-4)}
      </Text>
    </View>
  );
};
