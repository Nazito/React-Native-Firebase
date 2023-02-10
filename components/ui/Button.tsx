import { FC } from "react";
import { Text, TouchableHighlight } from "react-native";

interface IButton {
  onPress?: () => void;
  title: string;
  colors?: [string, string];
}

export const Button: FC<IButton> = ({
  onPress,
  colors = ["#fde910", "rgba(211,211,211, .4)"],
  title,
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={{
        backgroundColor: colors[0],
        minWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
      }}
    >
      <Text style={{ fontSize: 17, fontWeight: "700" }}>{title}</Text>
    </TouchableHighlight>
  );
};
