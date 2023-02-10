import { FC } from "react";
import { TextInput } from "react-native";

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

export const Field: FC<IField> = ({ onChange, placeholder, val, isSecure }) => {
  return (
    <TextInput
      style={{
        width: "100%",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        backgroundColor: "rgba(211,211,211, .4)",
      }}
      autoCapitalize={"none"}
      placeholder={placeholder}
      value={val}
      onChangeText={onChange}
      secureTextEntry={isSecure}
    />
  );
};
