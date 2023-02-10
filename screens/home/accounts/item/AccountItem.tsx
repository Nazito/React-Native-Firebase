import { FC } from "react";
import { View } from "react-native";
import { IAccount } from "../types";
import { Balance } from "./Balance";
import { CardPreview } from "./CardPreview";
import { Currency } from "./Currency";

export const AccountItem: FC<{ account: IAccount }> = ({ account }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: "transparent",
        borderBottomColor: "rgba(0,0,0, .1)",
        borderWidth: 0.5,
      }}
    >
      <Currency currency={account.currency} />
      <Balance balance={account.balance} />
      <CardPreview type={account.name} cardNumber={account.cardNumber} />
    </View>
  );
};
