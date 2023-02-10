import { FC } from "react";
import { Text } from "react-native";
import { Container } from "./Container";

export const Heading: FC<{ textVal: string; isCenter?: boolean }> = ({
  textVal,
  isCenter = true,
}) => {
  return (
    <Container>
      <Text
        style={{
          fontSize: 23,
          fontWeight: "700",
          textAlign: isCenter ? "center" : "auto",
        }}
      >
        {textVal}
      </Text>
    </Container>
  );
};
