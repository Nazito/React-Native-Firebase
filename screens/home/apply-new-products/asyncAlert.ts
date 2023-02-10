import { Alert } from "react-native";

interface IBtns {
  text: string;
  resolveValue: string;
  textSecond: string;
  resolveValueSecond: string;
}

interface IAsyncAlert {
  title: string;
  msg?: string;
  btns: IBtns;
}

export const asyncAlert = async ({ title, msg, btns }: IAsyncAlert) =>
  new Promise((resolve) => {
    Alert.alert(
      title,
      msg,
      [
        {
          text: btns.text,
          onPress: () => {
            resolve(btns.resolveValue);
          },
        },
        {
          text: btns.textSecond,
          onPress: () => {
            resolve(btns.resolveValueSecond);
          },
        },
      ],
      { cancelable: false }
    );
  });
