import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FC } from "react";
import { Alert, View } from "react-native";
import { Button } from "../../../components/ui/Button";
import { db } from "../../../firebase";
import { useAuth } from "../../../hooks/useAuth";
import { getRandomCardNumber } from "../../../utils/getRandomCardNumber";
import { asyncAlert } from "./asyncAlert";

export const ApplyNewProducts: FC = () => {
  const { user } = useAuth();
  const registerHandler = async () => {
    try {
      const currency = await asyncAlert({
        title: "Currency",
        msg: "Select account currency",
        btns: {
          text: "UAH",
          resolveValue: "UAH",
          textSecond: "USD",
          resolveValueSecond: "USD",
        },
      });
      const cardType = await asyncAlert({
        title: "Card Type",
        msg: "Select card type",
        btns: {
          text: "Black",
          resolveValue: "Black",
          textSecond: "Standart",
          resolveValueSecond: "Standart",
        },
      });

      await addDoc(collection(db, "accounts"), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        balance: 0,
        cardNumber: getRandomCardNumber(),
        currency,
        name: cardType,
      });
    } catch (e: any) {
      Alert.alert("Error apply new product", e.message);
    }
  };
  return (
    <View style={{ marginTop: 20 }}>
      <Button onPress={registerHandler} title="Apply new product" />
    </View>
  );
};
