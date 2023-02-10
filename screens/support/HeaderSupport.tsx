import { FC } from "react";
import { Image, Text, View } from "react-native";
import { Container } from "../../components/ui/Container";

export const HeaderSupport: FC = () => {
  return (
    <Container
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={{ uri: "https://tinypng.com/images/social/website.jpg" }}
        style={{
          width: 40,
          height: 40,
          marginRight: 10,
          borderRadius: 20,
        }}
      />
      <View>
        <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 5 }}>
          Support
        </Text>
        <Text>We are there 24/7</Text>
      </View>
    </Container>
  );
};
