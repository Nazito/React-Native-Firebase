import { FC } from "react";
import { Pressable, Text } from "react-native";
import { BOX_SHADOW } from "../../../files";
import { useAccounts } from "../../home/accounts/useAccounts";
import { handleTransfer } from "../handleTransfer";
import { Icon } from "./Icon";
import { IOtherItem } from "./types";

const CARD_CACHE_NUMBER = "7052 2343 5403";

export const OtherItem: FC<{ item: IOtherItem }> = ({ item }) => {
  const { accounts } = useAccounts();

  return (
    <Pressable
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 15,
        ...BOX_SHADOW,
      }}
      onPress={handleTransfer.bind(this, accounts[0], CARD_CACHE_NUMBER)}
    >
      <Icon iconName={item.iconName} />
      <Text style={{ fontSize: 10, marginTop: 8 }}>{item.title}</Text>
    </Pressable>
  );
};
