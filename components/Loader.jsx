import { ActivityIndicator, SafeAreaView, Text } from "react-native";

export const Loader = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};
