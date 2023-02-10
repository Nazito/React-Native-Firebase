import { FC } from "react";
import { Text } from "react-native";
import { Currency } from "./Currency";

export const Balance: FC<{ balance: number }> = ({ balance }) => {
  return <Text style={{ fontWeight: "600" }}>{balance}</Text>;
};
