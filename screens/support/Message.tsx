import { FC } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Layout } from "../../components/layout/Layout";
import { useAuth } from "../../hooks/useAuth";
import { IMessage } from "./types";

export const Message: FC<{ message: IMessage }> = ({ message }) => {
  const { user } = useAuth();

  const isMsgByAuthUser = user.uid === message.userId;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        alignSelf: isMsgByAuthUser ? "flex-start" : "flex-end",
        backgroundColor: isMsgByAuthUser ? "rgba(0,0,0, .2)" : "#1e90ff",
        padding: 5,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <Text style={{ color: isMsgByAuthUser ? "auto" : "#fff" }}>
        {message.text}
      </Text>
      <Text
        style={{
          marginLeft: 5,
          fontSize: 10,
          color: isMsgByAuthUser ? "auto" : "#fff",
        }}
      >
        {message.timestamp}
      </Text>
    </View>
  );
};
