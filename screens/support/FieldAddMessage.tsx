import { FC, useState } from "react";
import { Alert, Pressable, TextInput, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { MaterialIcons } from "@expo/vector-icons";
import { Container } from "../../components/ui/Container";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export const FieldAddMessage: FC = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const handleSendMessage = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        timestamp: serverTimestamp(),
        userId: user.uid,
        text: message,
      });
    } catch (e: any) {
      Alert.alert("Error add new msg", e.message);
    } finally {
      setMessage("");
    }
  };
  return (
    <Container style={{ marginTop: "auto", marginBottom: 15 }}>
      <View
        style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
      >
        <TextInput
          placeholder="Enter your message"
          onChangeText={setMessage}
          value={message}
          showSoftInputOnFocus={false}
          autoCapitalize="none"
          style={{
            height: 40,
            width: "85%",
            borderRadius: 20,
            backgroundColor: "#ccc",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        />
        <Pressable
          onPress={handleSendMessage}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: "#ccc",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
          }}
        >
          <MaterialIcons name="send" size={20} color="red" />
        </Pressable>
      </View>
    </Container>
  );
};
