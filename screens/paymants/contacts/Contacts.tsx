import { FC } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { Loader } from "../../../components/Loader";
import { Avatar } from "../../../components/ui/Avatar";
import { SubHeading } from "../../../components/ui/SubHeading";
import { ContactItem } from "./ContactItem";
import { useContacts } from "./useContacts";

export const Contacts: FC = () => {
  const { contacts, isloading } = useContacts();

  return (
    <View style={{ marginBottom: 20 }}>
      <SubHeading textVal="Phone transfers" />
      {isloading ? (
        <Loader />
      ) : contacts.length ? (
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={contacts}
          renderItem={({ item }) => <ContactItem contact={item} />}
        />
      ) : (
        <Text>You dont have contacts yet</Text>
      )}
    </View>
  );
};
