import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Loader } from "../../components/Loader";
import { Button } from "../../components/ui/Button";
import { Field } from "../../components/ui/Field";
import { useAuth } from "../../hooks/useAuth";
interface IData {
  email: string;
  password: string;
}

export const Auth: FC = () => {
  const { isLoading, login, register } = useAuth();
  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<IData>({} as IData);

  const authHandler = async () => {
    const { email, password } = data;

    if (isReg) await register(email, password);
    else await login(email, password);

    setData({} as IData);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: "70%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontWeight: "800",
            fontSize: 24,
            marginBottom: 5,
          }}
        >
          {isReg ? "Sign Up" : "Sign In"}
        </Text>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Field
              val={data.email}
              placeholder="Enter email"
              onChange={(val) => setData({ ...data, email: val })}
            />
            <Field
              val={data.password}
              placeholder="Enter passwoprd"
              onChange={(val) => setData({ ...data, password: val })}
            />

            <Button onPress={authHandler} title="Lets go" />
            <Pressable
              style={{
                width: "100%",
                justifyContent: "flex-end",
                marginTop: 10,
              }}
              onPress={() => setIsReg(!isReg)}
            >
              <Text
                style={{
                  color: "rgba(0,0,0, .5)",
                  marginLeft: "auto",
                  marginRight: 10,
                  fontSize: 13,
                }}
              >
                {isReg ? "login" : "Register"}
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};
