import { FC } from "react";
import { FlatList, View } from "react-native";
import { SubHeading } from "../../../components/ui/SubHeading";
import { otherItems } from "./dataOtherItems";
import { OtherItem } from "./OtherItem";

export const Other: FC = () => {
  return (
    <View
      style={
        {
          // minWidth: "100%",
          // borderWidth: 5,
          // borderStyle: "solid",
          // borderColor: "green",
        }
      }
    >
      <SubHeading textVal="Important transfers" />
      <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={otherItems}
        renderItem={({ item }) => <OtherItem item={item} />}
      />
    </View>
  );
};
