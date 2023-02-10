import { FC } from "react";
import { Text, View } from "react-native";

interface IAvatar {
  name?: string | null;
  size?: "small" | "large";
}

export const Avatar: FC<IAvatar> = ({ name, size = "small" }) => {
  const isSmall = size === "small";

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0, .3)",
        width: isSmall ? 30 : 50,
        height: isSmall ? 30 : 50,
        borderRadius: isSmall ? 15 : 25,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: isSmall ? 13 : 20,
          fontWeight: "700",
        }}
      >
        {name?.slice(0, 1)}
      </Text>
    </View>
  );
};
