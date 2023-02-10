import { FC, Fragment } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Loader } from "../../../components/Loader";
import { Post } from "../../../components/Post";
import { Container } from "../../../components/ui/Container";
import { AccountItem } from "./item/AccountItem";
import { useAccounts } from "./useAccounts";

export const Accounts: FC = () => {
  const { accounts, isLoading } = useAccounts();
  return (
    <View style={{ marginTop: 11 }}>
      {isLoading ? (
        <Loader />
      ) : accounts.length ? (
        <FlatList
          data={accounts}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <AccountItem account={item} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>You dont have cards</Text>
      )}
    </View>
  );
};
