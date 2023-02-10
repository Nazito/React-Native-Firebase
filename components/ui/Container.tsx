import { FC } from "react";
import { Text, View } from "react-native";

export const Container: FC<{ style?: any }> = ({ children, style = {} }) => {
  return (
    <View style={{ ...{ paddingLeft: 15, paddingRight: 15 }, ...style }}>
      {children}
    </View>
  );
};
