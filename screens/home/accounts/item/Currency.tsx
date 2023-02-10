import { FC } from "react";
import { Text } from "react-native";

export const Currency: FC<{ currency: string }> = ({ currency }) => {
  return <Text style={{ fontWeight: "600" }}>{currency}</Text>;
};
