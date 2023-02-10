import { FC } from "react";
import { Pressable, Text } from "react-native";
import { Avatar } from "../../../components/ui/Avatar";
import { useAccounts } from "../../home/accounts/useAccounts";
import { handleTransfer } from "../handleTransfer";
import { IContact } from "./types";

export const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
  const { accounts } = useAccounts();
  return (
    <Pressable
      style={{
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => handleTransfer(accounts[0], contact.cardNumber)}
    >
      <Avatar name={contact?.displayName} size="large" />
      <Text>{contact.displayName}</Text>
    </Pressable>
  );
};
