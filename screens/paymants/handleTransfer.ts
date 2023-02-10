import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Alert } from "react-native";
import { db } from "../../firebase";
import { IAccount } from "../home/accounts/types";
import { fire } from "react-native-alertbox";

export const handleTransfer = async (
  fromAccount: IAccount,
  cardNumber: string
) => {
  fire({
    title: "Sum Transfer",
    message: "Enter the transfer amount:",
    // buttons
    actions: [
      {
        text: "Close",
        style: "cancel",
      },
      {
        text: "Send",
        onPress: async (sum) => {
          try {
            let accountToId = "";
            let currentToBallance = "";
            const querySnapshot = await getDocs(
              query(
                collection(db, "accounts"),
                where("cardNumber", "==", cardNumber),
                limit(1)
              )
            );

            querySnapshot.docs.forEach((doc) => {
              accountToId = doc.id;
            });

            const docRefTo = doc(db, "accounts", accountToId);
            const docSnapTo = await getDoc(docRefTo);

            if (docSnapTo.exists()) {
              currentToBallance = docSnapTo.data().balance;
            } else {
              Alert.alert("The card were you are sending money was not found");
              return;
            }

            await updateDoc(docRefTo, {
              balance: currentToBallance + Number(sum.transfer),
            });

            const docRefFrom = doc(db, "accounts", fromAccount._id);
            await updateDoc(docRefFrom, {
              balance: fromAccount.balance - Number(sum.transfer),
            });

            return;
          } catch (e: any) {
            Alert.alert("Error transfer", e.message);
          }
        },
      },
    ],
    // fields
    fields: [
      {
        name: "transfer",
        placeholder: "...Enter sum",
      },
    ],
  });
};
