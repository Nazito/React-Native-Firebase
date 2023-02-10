import { FC } from "react";
import { Text, View } from "react-native";
import { Layout } from "../../components/layout/Layout";
import { Loader } from "../../components/Loader";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Field } from "../../components/ui/Field";
import { Heading } from "../../components/ui/Heading";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "./useProfile";
import { useUpdateProfile } from "./useUpdateProfile";

export const Profile: FC = () => {
  const { isLoading: isLoadingProfile, name, profile, setName } = useProfile();
  const { isLoading, isSuccess, updateProfile } = useUpdateProfile(
    name,
    profile.docId
  );
  const { logout } = useAuth();
  return (
    <Layout>
      <Heading textVal="Profile" />
      <Container>
        {isSuccess && (
          <View
            style={{
              backgroundColor: "#38e038",
              minWidth: "100%",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 15,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "700" }}>
              Profile updated successfully
            </Text>
          </View>
        )}
        {isLoadingProfile || isLoading ? (
          <Loader />
        ) : (
          <>
            <Field onChange={setName} val={name} placeholder="Enter name" />
            <Button onPress={updateProfile} title="Update profile" />
            <Button onPress={logout} title="Logout" />
          </>
        )}
      </Container>
    </Layout>
  );
};
