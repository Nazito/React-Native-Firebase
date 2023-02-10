import { FC } from "react";
import { Text } from "react-native";
import { Container } from "./Container";

export const SubHeading: FC<{ textVal: string }> = ({ textVal }) => {
  return (
    <Container style={{ marginBottom: 10 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
        }}
      >
        {textVal}
      </Text>
    </Container>
  );
};
