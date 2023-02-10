import { FC } from "react";
import { Pressable, Text } from "react-native";
import { IFooterItems } from "./types";
import { AntDesign } from "@expo/vector-icons";
import { TypeRootStackParamList } from "../../../navigation/types";

interface InavItem {
  item: IFooterItems;
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute?: string;
}

export const NavItem: FC<InavItem> = ({ item, navigate, currentRoute }) => {
  const isActive = currentRoute === item.title;
  return (
    <Pressable
      onPress={() => navigate(item.title)}
      style={{
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AntDesign
        name={item.iconName}
        style={{
          fontSize: 25,
          marginBottom: 10,
          color: isActive ? "#1e90ff" : "rgba(0,0,0, .7)",
        }}
      />
      <Text
        style={{
          color: isActive ? "#1e90ff" : "rgba(0,0,0, .7)",
          fontSize: 10,
        }}
      >
        {item.title}
      </Text>
    </Pressable>
  );
};
