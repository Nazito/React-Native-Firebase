import { FC } from "react";
import { ScrollView, StatusBar, View } from "react-native";

interface ILayout {
  isScrollView?: boolean;
}

export const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  return (
    <View
      style={{
        minHeight: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        // borderWidth: 5,
        // borderStyle: "solid",
        // borderColor: "red",
      }}
    >
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};
