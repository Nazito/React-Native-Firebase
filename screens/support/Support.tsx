import { FC } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { Container } from "../../components/ui/Container";

import { FieldAddMessage } from "./FieldAddMessage";
import { HeaderSupport } from "./HeaderSupport";
import { Message } from "./Message";
import { useMessages } from "./useMessages";

export const Support: FC = () => {
  const { messages } = useMessages();
  console.log(messages);
  return (
    <View style={{ height: "100%" }}>
      <HeaderSupport />
      <Container>
        <ScrollView
          style={{
            height: "80%",
            // borderWidth: 5,
            // borderStyle: "solid",
            // borderColor: "yellow",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <FlatList
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={messages}
            renderItem={({ item }) => <Message message={item} />}
          />
        </ScrollView>
      </Container>
      <FieldAddMessage />
    </View>
  );
};
