import { FC } from "react";
import { Text, View } from "react-native";
import { IFooterItems } from "../../../components/layout/footer/types";
import { AntDesign } from "@expo/vector-icons";

interface IIcon extends Pick<IFooterItems, "iconName"> {}

export const Icon: FC<IIcon> = ({ iconName }) => {
  return (
    <View
      style={{
        width: 30,
        height: 30,
        backgroundColor: "#1e90ff",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AntDesign name={iconName} size={14} style={{ color: "#fff" }} />
    </View>
  );
};
